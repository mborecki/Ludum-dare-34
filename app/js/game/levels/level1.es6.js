import Engine from './../../engine/engine.es6';
import Level from './../../engine/level.es6';

import Road from './../objects/road.es6';
import Player from './../objects/player.es6';
import Car from './../objects/car.es6';
import CFG from './../config.es6.js';

class Level1 extends Level {
    constructor () {
        super();

        this.acc = CFG.ACC //[px/s];
        this.maxSpeed = CFG.MAX_SPEED;

        this.playerYpos = 530;
        this.playerXpos = [110, 185, 260, 335, 410, 485];
        this.playerPosIndex = 0

        this.time = 0;
        this.position = 0;

        this.roadObjects = [];
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

        this.roadObjects.push(Engine.ObjectFactory.spawn('Car1', {
            y: 200,
            positions: this.playerXpos,
            roadPosition: 3,
            speedMod: 1,
        }, {
            layer: 100
        }));



        this.roadObjects.push(Engine.ObjectFactory.spawn('Car1', {
            y: 200,
            positions: this.playerXpos,
            roadPosition: 5,
            speedMod: 0.5,
        }, {
            layer: 100
        }));



        this.roadObjects.push(Engine.ObjectFactory.spawn('Car1', {
            y: 200,
            positions: this.playerXpos,
            roadPosition: 4,
            speedMod: 0.2
        }, {
            layer: 100
        }));

        this.roadObjects.push(Engine.ObjectFactory.spawn('Car1', {
            y: 200,
            positions: this.playerXpos,
            roadPosition: 2,
            speedMod: -1
        }, {
            layer: 100
        }));

        Engine.Input.clear();
    }

    update(dt) {
        // if (!this.started) return;
        super.update(dt);

        this.time += dt;

        if (this.position > 2000) {
            this.position = 0;

            console.log('add new car');
            this.roadObjects.push(Engine.ObjectFactory.spawn('Car1', {
                y: 0,
                positions: this.playerXpos,
                roadPosition: 4,
                speedMod: 1
            }, {
                layer: 100
            }));
        }


        if (Engine.Input.down('button_3')) {
            this.road.speed = 0;
            this.acc = 0;
        }

        if (this.road.speed < this.maxSpeed) {
            // console.log('up', this.road.speed, this.acc * (dt / 1000) )
            this.road.speed += this.acc * (dt / 1000);
            this.player.speed = this.road.speed;
        } else {
            // console.log('MAX', this.road.speed,this.maxSpeed )
        }

        for (let i = 0; i < this.roadObjects.length; i++ ) {
            if (this.roadObjects[i].y > 1500) {
                this.roadObjects[i].destroy();
            }
            this.roadObjects[i].speed = this.road.speed
        }

        this.position += this.road.speed * (dt / 1000);
    }
}

export default Level1;
