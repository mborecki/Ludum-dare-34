import Engine from './../engine/engine.es6';

class Game {
    constructor (cfg) {
        this.canvas = cfg.canvas;

        Engine.canvas = this.canvas;
        Engine.start();
    }
}

export default Game;