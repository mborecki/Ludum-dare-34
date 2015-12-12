import Engine from './../engine/engine.es6';

import TestObject from './objects/testObject.es6';
import TestObject2 from './objects/testObject_2.es6';

class Game {
    constructor (cfg) {
        this.canvas = cfg.canvas;

        Engine.canvas = this.canvas;

        Engine.ObjectFactory.register('test', TestObject);
        Engine.ObjectFactory.register('test2', TestObject2);

        let test = Engine.ObjectFactory.spawn('test', {
            x: 155,
            y: 0
        });
        let test_2 = Engine.ObjectFactory.spawn('test', {
            x: 0,
            y: 75
        });

        let test_3 = Engine.ObjectFactory.spawn('test', {
            x: 155 - 25,
            y: 75 - 25,
            size: 3
        });

        let test_4 = Engine.ObjectFactory.spawn('test', {
            x: 155 + 25,
            y: 75 + 25,
            size: 3
        });

        let test2 = Engine.ObjectFactory.spawn('test2', {
            x: 20,
            y: 75,
            size: 50
        }, {
            layer: -10
        });

        Engine.Images.register('Background', {
            origin: [0, 0],
            size: [800, 400],
            url: 'assets/images/bg.png'
        })

        let bg = Engine.ObjectFactory.spawn('EStaticImageObject', {
            x: 0,
            y: 0,
            w: 800,
            h: 400,
            image: 'Background'
        })

        Engine.Input.bindAction('button_1', Engine.Input.TYPE.A, Engine.Input.TYPE.LEFT);
        Engine.Input.bindAction('button_2', Engine.Input.TYPE.W, Engine.Input.TYPE.RIGHT);

        test.renderer.setParam('color', '#0f0');
        test2.renderer.setParam('color', '#00f');

        Engine.start();
    }
}

export default Game;
