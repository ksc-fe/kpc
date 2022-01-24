import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';

interface BezierOpts {
    wrapper: HTMLElement,
    onValueChange?: (coordinates: Coordinates) => void
}

type Point = [number, number];

export type Coordinates = number[];

// A canvas box to show bezier curve
class Bezier {
    private wrapper: HTMLElement | null = null;

    private opts: BezierOpts | null = null;

    private canvas: HTMLCanvasElement | null = null;

    private pen: CanvasRenderingContext2D | null = null;

    private start: Point = [0, 0];

    private end: Point = [0, 0];

    private leftTop: Point = [0, 0];

    private rightBottom: Point = [0, 0];

    private pointA: Point = [0, 0];

    private pointB: Point = [0, 0];

    // Padding of canvas
    private padding: number = 20;

    private pointRadius: number = 6;

    private w: number = 0;

    private h: number = 0;

    private pointColor: string = '#0191EA';

    private topLevel: string = 'pointA';

    private staticLineColor: string = '#ddd';

    private renderAble: boolean = false;

    constructor(opts: BezierOpts) {
        this.wrapper = opts.wrapper;
        this.opts = opts;
        this.init();
    }

    init(): void {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.wrapper!.clientWidth;
        this.canvas.height = this.wrapper!.clientHeight;
        this.canvas.style.background = '#ffffff';

        this.pen = this.canvas.getContext('2d')!;
        this.pen.fillStyle = '#ffffff';
        this.pen.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.wrapper!.appendChild(this.canvas);

        this.initEvent();
        this.initCoordinate();
        this.render();
    }

    initEvent(): void {
        this.canvas!.onmousedown = (e: any) => {
            let pointASelected = false;
            let pointBSelected = false;

            const x1 = Math.abs(e.layerX - this.pointA[0]);
            const y1 = Math.abs(e.layerY - this.pointA[1]);
            const x2 = Math.abs(e.layerX - this.pointB[0]);
            const y2 = Math.abs(e.layerY - this.pointB[1]);

            pointASelected = Math.pow(x1, 2) + Math.pow(y1, 2) < Math.pow(this.pointRadius, 2);
            pointBSelected = Math.pow(x2, 2) + Math.pow(y2, 2) < Math.pow(this.pointRadius, 2);

            if(pointASelected && pointBSelected) {
                pointASelected = pointASelected && this.topLevel === 'pointA';
                pointBSelected = pointBSelected && this.topLevel === 'pointB';
            } else {
                pointASelected && (this.topLevel = 'pointA');
                pointBSelected && (this.topLevel = 'pointB');
            }

            this.renderAble = pointASelected || pointBSelected

            this.canvas!.onmousemove = (e: any) => {
                let x = e.layerX > this.end[0]
                    ? this.end[0]
                    : e.layerX < this.start[0]
                        ? this.start[0]
                        : e.layerX;

                let y = e.layerY > this.start[1]
                    ? this.start[1]
                    : e.layerY < this.end[1]
                        ? this.end[1]
                        : e.layerY;

                if(pointASelected) {
                    this.pointA = [x, y];
                }

                if(pointBSelected) {
                    this.pointB = [x, y];
                }

                if(this.renderAble) {
                    this.render();
                }
            }

            document.onmouseup = () => {
                this.canvas!.onmousemove = null;
                document.onmouseup = null;

                if(this.renderAble) {
                    this.opts?.onValueChange && this.opts?.onValueChange(this.getFmtValue());
                    this.renderAble = false;
                }
            }
        }
    }

    initCoordinate(): void {
        this.w = this.canvas!.width - 2 * this.padding;
        this.h = this.canvas!.height - 2 * this.padding;

        this.start = [this.padding, this.h + this.padding];
        this.end = [this.padding + this.w, this.padding];

        this.leftTop = [this.padding, this.padding];
        this.rightBottom = [this.padding + this.w, this.padding + this.h];

        // default
        this.setPoint(.5, 0, .5, 1);
    }

    render(): void {
        this.clear();
        this.drawStatic();
        this.renderText();
        this.drawPoint();
        this.drawBezier();
        this.drawEndPoint();
    }

    renderText(): void {
        const pen = this.pen!;
        const canvas = this.canvas!;
        const [x1, y1, x2, y2] = this.getValue().map((i: number) => {
            return i == 1 ? '1.0' : i.toFixed(2).substring(1)
        });
        pen.font = "12px Arial";
        pen.fillStyle = '#000';

        const space = ' '.repeat(8);
        const brackets = `(${space},${space})`;
        pen.fillText(brackets, this.padding, this.padding - 8);
        pen.fillText(brackets, canvas.width - 60 - this.padding, canvas.height - 8);
        pen.fillStyle = '#FF7F22';
        pen.fillText(`${x2}    ${y2}`, this.padding + 10, this.padding - 7);
        pen.fillText(`${x1}    ${y1}`, canvas.width - 60 - this.padding + 8, canvas.height - 7);
    }

    drawStatic(): void {
        // Coordinate axis
        this.line(this.start, this.leftTop, this.staticLineColor, 1);
        this.line(this.start, this.rightBottom, this.staticLineColor, 1);

        // Background dash line
        const size = (this.start[1] - this.leftTop[1]) / 5;
        for(let i = 0; i < 5; i++) {
            const y = this.start[1] - (i + 1) * size;
            let x1 = this.start[0];
            let x2 = this.rightBottom[0];
            this.dashLine(x1, y, x2, y, this.staticLineColor, 1);
        }
    }

    drawPoint(): void {
        // Point a
        this.line(this.start, this.pointA, '#2A2A2E', 1);
        this.arc(this.pointA, this.pointRadius, this.pointColor, this.pointColor);

        // Point b
        this.line(this.end, this.pointB, '#2A2A2E', 1);
        this.arc(this.pointB, this.pointRadius, this.pointColor, this.pointColor);
    }

    drawEndPoint(): void {
        // End point
        this.arc(this.start, 5, '#AEAEAE', '#fff');
        this.arc(this.end, 5, '#AEAEAE', '#fff');
    }

    setPoint(x1: number, y1: number, x2: number, y2: number): void {
        this.pointA = this.calcCoordinate([x1 * this.w, (1 - y1) * this.h]);
        this.pointB = this.calcCoordinate([x2 * this.w, (1 - y2) * this.h]);
    }

    calcCoordinate(coordinate: Point): Point {
        return <Point>coordinate.map(i => i + this.padding);
    }

    getValue(): Coordinates {
        const format = (point: Point) => ([
            Number(((point[0] - this.padding) / this.w).toFixed(2)),
            Number((1 - ((point[1] - this.padding) / this.w)).toFixed(2)),
        ]);

        return [
            ...format(this.pointA),
            ...format(this.pointB)
        ];
    }

    getFmtValue(): Coordinates {
        return this.getValue().map((i: number) => Number(i.toFixed(2)));
    }

    line(pointA: Point, pointB: Point, color = '#000', lineWidth = 2): void {
        const [startX, startY] = pointA;
        const [endX, endY] = pointB;
        const pen = this.pen!;
        pen.beginPath();
        pen.setLineDash([]);
        pen.lineWidth = lineWidth;
        pen.strokeStyle = color;
        pen.moveTo(startX, startY);
        pen.lineTo(endX, endY);
        pen.stroke();
    }

    dashLine(startX: number, startY: number, endX: number, endY: number, color = '#000', lineWidth = 2): void {
        const pen = this.pen!;
        pen.beginPath();
        pen.setLineDash([5, 5]);
        pen.lineWidth = lineWidth;
        pen.strokeStyle = color;
        pen.moveTo(startX, startY);
        pen.lineTo(endX, endY);
        pen.stroke();
    }

    arc(point: Point, r: number, color = '#000', bgColor = '#000'): void {
        const [x, y] = point;
        const pen = this.pen!;
        pen.beginPath();
        pen.setLineDash([]);
        pen.arc(x, y, r, 0, 2 * Math.PI);
        pen.lineWidth = 1;
        pen.strokeStyle = color;
        pen.fillStyle = bgColor;
        pen.fill();
        pen.stroke();
    }

    drawBezier(): void {
        const pen = this.pen!;
        pen.beginPath();
        pen.lineWidth = 4;
        pen.moveTo(...this.start);

        const gr = pen.createLinearGradient(...this.start, ...this.end);
        gr.addColorStop(0, '#28BFFF');
        gr.addColorStop(0.5, '#0139FF');
        gr.addColorStop(1, '#28BFFF');
        pen.strokeStyle = gr;
        
        pen.bezierCurveTo(
            ...this.pointA,
            ...this.pointB,
            ...this.end
        );
        pen.stroke();
    }

    setValue(x1: number, y1: number, x2: number, y2: number): void {
        this.setPoint(x1, y1, x2, y2);
        this.render();
    }

    clear() {
        this.pen!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    }
}

export interface BezierBoxProps {
    value: number[]
}

export interface BezierBoxEvents {
    valueChange: [Coordinates]
}

const typeDefs: Required<TypeDefs<BezierBoxProps>> = {
    value: Array
};


const defaults = (): Partial<BezierBoxProps> => ({
    value: []
});

export class BezierBox extends Component<BezierBoxProps, BezierBoxEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private bezierBoxRef = createRef<HTMLElement>();

    private bezier: Bezier | null = null

    init() {
        this.watch('value', (coordinates: Coordinates) => {
            const [x1, y1, x2, y2] = coordinates;
            this.bezier && this.setCoordinate(x1, y1, x2, y2);
        });
    }

    mounted() {
        this.bezier = new Bezier({
            wrapper: <HTMLElement>this.bezierBoxRef.value,
            onValueChange: (coordinates: Coordinates) => {
                this.trigger('valueChange', coordinates);
            }
        });

        const [x1, y1, x2, y2] = this.get('value');
        this.bezier && this.setCoordinate(x1, y1, x2, y2);
    }

    setCoordinate(x1: number, y1: number, x2: number, y2: number) {
        this.bezier!.setValue(x1, y1, x2, y2);
    }
}