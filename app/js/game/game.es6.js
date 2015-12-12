import Engine from './../engine/engine.es6';

import TestObject from './testObject.es6';

class Game {
    constructor (cfg) {
        this.canvas = cfg.canvas;

        Engine.canvas = this.canvas;

        Engine.ObjectFactory.register('test', TestObject);
        // Engine.ObjectFactory.register('test', TestObject);

        let test = Engine.ObjectFactory.spawn('test');
        let test2 = Engine.ObjectFactory.spawn('test', {
            x: 155,
            y: 110
        });

        test.renderer.setParam('color', '#0f0');
        test2.renderer.setParam('color', '#00f');

        Engine.start();
    }
}

export default Game;
