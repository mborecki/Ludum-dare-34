import Engine from './../../engine/engine.es6';
import Level from './../../engine/level.es6';

import Road from './../objects/road.es6';

class Level1 extends Level {
    constructor () {
        super();

        Engine.ObjectFactory.register('Road', Road);
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
    }

    update() {
        super.update();
    }
}

export default Level1;
