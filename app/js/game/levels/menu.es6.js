import Engine from './../../engine/engine.es6';
import Level from './../../engine/level.es6';

class MainMenu extends Level {
    constructor () {
        super();
    }

    start () {
        super.start();

        Engine.Images.register('MainMenu', {
            origin: [0, 0],
            size: [800, 600],
            url: 'assets/images/MainMenu.png'
        });

        Engine.ObjectFactory.spawn('EStaticImageObject', {
            x: 0,
            y: 0,
            size: [800, 600],
            image: 'MainMenu'
        }, {
            layer: -999
        });
    }

    update() {
        super.update();

        if (Engine.Input.down('button_1')) {
            console.log('PLAY!');
            Engine.runLevel('Level1');
        }

        if (Engine.Input.down('button_2')) {
            console.log('INFO!');
            Engine.runLevel('Test');
        }
    }
}

export default MainMenu;
