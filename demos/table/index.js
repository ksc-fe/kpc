import template from './index.vdt';
import './index.styl';
import {Store} from './store';

var store = new Store();

var startTime;
var lastMeasure;
var startMeasure = function(name) {
    startTime = performance.now();
    lastMeasure = name;
}
var stopMeasure = function() {
    var last = lastMeasure;
    if (lastMeasure) {
        window.setTimeout(function () {
            lastMeasure = null;
            var stop = performance.now();
            console.log(last+" took "+(stop-startTime));
        }, 0);
    }
};

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            rows: store.data,
            selected: null,
        }
    }

    add() {
        startMeasure("add");
        store.runLots();
        // store.add();
        this.sync();
        stopMeasure();
    }

    add1000() {
        startMeasure("add1000");
        store.add();
        this.sync();
        stopMeasure();
    }

    remove(id) {
        startMeasure("remove");
        store.delete(id);
        this.sync();
        stopMeasure();
    }

    select(id) {
        startMeasure("select");
        store.select(id);
        this.set('selected', id, {silent: true});
        this.sync();
        this.update();
        stopMeasure();
    }

    sync() {
        this.set('rows', Object.freeze(store.data));
    }
}
