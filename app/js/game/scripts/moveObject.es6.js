import Script from './../../engine/script.es6';
import Input from './../../engine/input.es6';

class MoveObject extends Script {
    constructor() {
        super();
        this.speed = 50; //[px/s]
    }

    update(dT) {
        if (Input.down('button_1')) {
            this.object.x -= this.speed * (dT / 1000);
        }

        if (Input.down('button_2')) {
            this.object.x += this.speed * (dT / 1000);
        }
    }
}

export default MoveObject;
