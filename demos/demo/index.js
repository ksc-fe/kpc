import template from './index.vdt';
import Intact from 'intact';
import './index.styl';

const loadScript = () => {  
    return new Promise((resolve) => {
        window.bmapInit = resolve; 
        const script = document.createElement("script");  
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=1c121b01e6f80b8e514c6c42bab2bc62&callback=bmapInit";
        document.body.appendChild(script);  
    });
};

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            locations: Array.apply(null, {length: 30}).map((item, index) => {
                return {
                    name: `地址${index}`
                }
            })
        }
    }

    _init() {
        this.hasShrinked = false;
    }

    _mount() {
        loadScript().then(() => {
            const map = new BMap.Map('map');
            const point = new BMap.Point(116.312857, 40.075745);
            map.addControl(new BMap.GeolocationControl());
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom();

			const marker = new BMap.Marker(point);
			map.addOverlay(marker);
        });
    }

    _onTouchStart(e) {
        this.y = e._rawEvent.changedTouches[0].pageY;
        console.log('start', e);
    }

    _onTouchMove(e) {
        const y = e._rawEvent.changedTouches[0].pageY;
        if (y - this.y < 0) {
            this._shrink();
        } else {
            this._expand();
        }
        console.log('move', e);
    }

    _shrink() {
        if (this.hasShrinked) return;

        this.element.parentNode.scrollTop = 75;
        this.refs.map.style.height = '225px';
        this.hasShrinked = true;
    }

    _expand() {
        if (!this.hasShrinked) return;

        this.element.parentNode.scrollTop = 0;
        this.refs.map.style.height = '300px';
        this.hasShrinked = false;
    }
}
