import Engine from './../engine/engine.es6';

import MainMenu from './levels/menu.es6';
import TestLevel from './levels/test.es6';

class Game {
    constructor (cfg) {
        this.canvas = cfg.canvas;

        Engine.canvas = this.canvas;

        this.initKeyBindings();
        this.initImages();
        this.initLevels();

        Engine.start();
    }

    initKeyBindings () {
        Engine.Input.bindAction('button_1', Engine.Input.TYPE.A, Engine.Input.TYPE.LEFT);
        Engine.Input.bindAction('button_2', Engine.Input.TYPE.W, Engine.Input.TYPE.RIGHT);
    }

    initImages () {
        Engine.Images.register('Grid100', {
            origin: [0, 0],
            size: [800, 600],
            url: 'assets/images/grid.png'
        });
    }

    initLevels () {
        Engine.addLevel('MainMenu', new MainMenu());
        Engine.addLevel('Test', new TestLevel());
        Engine.runLevel('MainMenu');
    }
}

export default Game;
