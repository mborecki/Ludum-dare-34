import ObjectFactory from './objectFactory.es6';


let EngineSingleton = null;

let fpsDisplay = null;
let canvas = null;

// let window.performance.now = window.performance.now

class Engine {
    start() {
        console.log('ENGINE: start')
        fpsDisplay = window.document.getElementById('fps');

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
        this.draw();
    }

    /**
     * @private
     */
    update(deltaTime) {
        this.lastUpdate = window.performance.now();

        if (fpsDisplay) {
            fpsDisplay.innerHTML = Math.floor(1000 / deltaTime)
        }
    }

    /**
     * @private
     */
    draw() {

    }

    addObject (object) {

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
}


if (!EngineSingleton) {
    EngineSingleton = new Engine();
}

export default EngineSingleton;
