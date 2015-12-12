import Script from './../../engine/script.es6';

class RotateRenderer extends Script {
    constructor (params = {}) {
        super();
        this.speed = params.speed || Math.PI; // [rad/s]
    }
    update(dT) {
        this.object.renderer.rotate(this.speed * (dT / 1000));
    }
}

export default RotateRenderer
