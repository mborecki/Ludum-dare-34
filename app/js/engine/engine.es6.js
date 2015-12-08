
let EngineSingleton = null;

let fpsDisplay = null;
let canvas = null;

// let window.performance.now = window.performance.now

class Engine {
    start() {
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

    set canvas(c) {
        canvas = c;
    }

    get canvas() {
        return canvas;
    }
}


if (!EngineSingleton) {
    EngineSingleton = new Engine();
}

export default EngineSingleton;