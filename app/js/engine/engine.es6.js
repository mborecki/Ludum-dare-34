import ObjectFactory from './objectFactory.es6';
import GameRenderer from './gameRenderer.es6';
import Images from './images.es6';
import Input from './input.es6';

import EStaticImageObject from './objects/staticImageObject';

let EngineSingleton = null;

let fpsDisplay = null;
let canvas = null;

// let window.performance.now = window.performance.now

class Engine {
    constructor (c) {
        this.gameRenderer = new GameRenderer();
        this.objects = [];
        this.levels = {};

        this.initBuildInObjects();
    }

    start() {
        console.log('ENGINE: start')
        fpsDisplay = window.document.getElementById('fps');

        this.gameRenderer.canvas = this.canvas;


        this.lastUpdate = window.performance.now();
        this.started = true;
        this.loop();

    }

    stop() {
        this.started = false;
    }


    /**
     * @private
     */
    loop() {
        if (!this.started) return;
        requestAnimationFrame(() => this.loop());
        let now = window.performance.now();
        let deltaTime = now - this.lastUpdate;

        this.update(deltaTime);
        if (!this.drawing) {
            this.draw();
        } else {
            console.warn('ZA WOLNO RYSUJESZ!');
        }
    }

    /**
     * @private
     */
    update(deltaTime) {
        this.lastUpdate = window.performance.now();

        // DEV!
        if (fpsDisplay) {
            fpsDisplay.innerHTML = Math.floor(1000 / deltaTime)
        }

        let oCount = this.objects.length;

        if (this.activeLevel) {
            this.activeLevel.update(deltaTime);
        }

        for (var i = 0; i < oCount; i++) {
            let o = this.objects[i];
            if (!o.destroyed && o.isUpdateable) {
                o.update(deltaTime);
            }
        }
    }

    /**
     * @private
     */
    draw() {
        this.drawing = true
        this.gameRenderer.draw(() => {
            this.drawing = false
        })
    }

    addObject (object) {
        console.log('addObject', object)
        if (object.isDrawable) {
            this.gameRenderer.add(object);
        }

        this.objects.push(object);
    }

    addLevel (name, level) {
        if (typeof this.levels[name] !== "undefined") {
            console.warn(`Repeated level name ${name}`);
        }

        this.levels[name] = level;
    }

    runLevel (name) {
        if (typeof this.levels[name] === "undefined") {
            console.warn(`Level name unknow: ${name}`);
        } else {
            this.stopActiveLevel();
            let level = this.levels[name];

            this.activeLevel = level;
            this.activeLevel.start();
        }
    }

    stopActiveLevel() {
        if (this.activeLevel) {
            for(var i = 0; i < this.objects.length; i++) {
                this.objects[i].destroy();
            }
        }

        this.activeLevel = null;
    }

    set canvas(c) {
        canvas = c;
    }

    get canvas() {
        return canvas;
    }

    get ObjectFactory() {
        return ObjectFactory;
    }

    get Images() {
        return Images;
    }

    get Input() {
        return Input;
    }

    initBuildInObjects() {
        this.ObjectFactory.register('EStaticImageObject', EStaticImageObject)
    }
}


if (!EngineSingleton) {
    EngineSingleton = new Engine();
}

console.log(EngineSingleton);

export default EngineSingleton;
