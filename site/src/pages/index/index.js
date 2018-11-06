import Intact from 'intact';
import template from './index.vdt';
import Layout from '../layout';
import './index.styl';

export default class extends Layout {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),
            current: 'one'
        }
    }
    _page1() {
        this.set('current', 'one');
    }
    _page2() {
        this.set('current', 'two');
    }

    _mountAA() {
        const self = this;
        let X, Y, startX, startY, moveEndX, moveEndY;
        window.onmousewheel = function (e) {
            let data = e.wheelDelta || 0;
            console.log(data)
            if (data > 0) {
                self.set('current', 'one');
            } else if (data < 0) {
                self.set('current', 'two');
            }
            // debugger
        };
        window.ontouchstart = function (e) {
            e.preventDefault();
            startX = e.changedTouches[0].pageX;
            startY = e.changedTouches[0].pageY;
        };
        window.ontouchmove = function (e) {
            e.preventDefault();
            moveEndX = e.changedTouches[0].pageX;
            moveEndY = e.changedTouches[0].pageY;

            X = moveEndX - startX;
            Y = moveEndY - startY;

            if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
                console.log("left 2 right");
            }
            else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
                console.log("right 2 left");
            }
            else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
                self.set('current', 'one');
                console.log("top 2 bottom");
            }
            else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
                self.set('current', 'two');
                console.log("bottom 2 top");
            }
            else{
                console.log("just touch");
            }
        };

        // var one = document.querySelector('.pages');
        var one = document.getElementById('page');

        function addEvent(elem, type, showAll) {
            type = type.split(' ');

            type.forEach(function(item) {
                elem.addEventListener(item, function(ev) {
                    console.log(item, showAll ? ev : ev.type);
                });
            });
        }

        addEvent(one, 'tap click touchstart touchmove touchend touchcancel swipe swipeLeft swipeRight swipeUp swipeDown longTap singleTap doubleTap mousewheel', true);

    }

    _destroy() {
        window.onmousewheel = null;
    }
}
