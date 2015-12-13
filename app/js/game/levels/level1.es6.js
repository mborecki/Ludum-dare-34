import Engine from './../../engine/engine.es6';
import Level from './../../engine/level.es6';

import Road from './../objects/road.es6';
import CFG from './../config.es6.js';

class Level1 extends Level {
    constructor () {
        super();

        this.acc = CFG.ACC //[px/s];
        this.maxSpeed = CFG.MAX_SPEED;
    }

    start () {
        super.start();

        Engine.ObjectFactory.spawn('EStaticImageObject', {
            x: 0,
            y: 0,
            size: [800, 600],
            image: 'MainScreen'
        }, {
            layer: -999
        });

        this.road = Engine.ObjectFactory.spawn('Road');
    }

    update(dt) {
        // if (!this.started) return;

        super.update(dt);

        if (this.road.speed < this.maxSpeed) {
            this.road.speed += this.acc * (dt / 1000)
        }
    }
}

export default Level1;
