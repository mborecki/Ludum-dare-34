import Script from './../../engine/script.es6';
import Input from './../../engine/input.es6';

class RotateRenderer extends Script {
    constructor (params = {}) {
        super();
        this.speed = params.speed || Math.PI; // [rad/s]
    }
    update(dT) {
        this.object.renderer.rotate(this.speed * (dT / 1000));

        if (Input.down('button_1')) {
            this.object.renderer.color = '#0ff';
            this.speed = Math.abs(this.speed);
        }


        if (Input.down('button_2')) {
            this.object.renderer.color = '#ff0';
            this.speed = -Math.abs(this.speed);
        }
    }
}

export default RotateRenderer
