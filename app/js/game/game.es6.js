import Engine from './../engine/engine.es6';

import TestObject from './testObject.es6';

class Game {
    constructor (cfg) {
        this.canvas = cfg.canvas;

        Engine.canvas = this.canvas;

        Engine.ObjectFactory.register('test', TestObject);
        // Engine.ObjectFactory.register('test', TestObject);

        let test = Engine.ObjectFactory.spawn('test');

        Engine.start();
    }
}

export default Game;
