import Engine from './../../engine/engine.es6';
import Level from './../../engine/level.es6';

import Road from './../objects/road.es6';
import Player from './../objects/player.es6';
import CFG from './../config.es6.js';

class Level1 extends Level {
    constructor () {
        super();

        this.acc = CFG.ACC //[px/s];
        this.maxSpeed = CFG.MAX_SPEED;

        this.playerYpos = 530;
        this.playerXpos = [110, 185, 260, 335, 410, 485];
        this.playerPosIndex = 0
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
        this.player = Engine.ObjectFactory.spawn('Player', {
            y: 530,
            positions: this.playerXpos,
            roadPosition: 3
        }, {
            layer: 100
        });
    }

    update(dt) {
        // if (!this.started) return;

        super.update(dt);

        if (Engine.Input.down('button_3')) {
            this.road.speed = 0;
            this.acc = 0;
        }

        if (this.road.speed < this.maxSpeed) {
            this.road.speed += this.acc * (dt / 1000);
            this.player.speed = this.road.speed;
        }
    }
}

export default Level1;
