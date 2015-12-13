import GameObject from './../../engine/gameObject.es6.js';
import Engine from './../../engine/engine.es6.js';

import EStaticImageObject from './../../engine/objects/staticImageObject.es6';


class RoadTile extends EStaticImageObject {
    constructor(params = {}) {
        super(params);

        console.log(this);

        this.updateParams({image: 'RoadTitle'});
    }
}

class Road extends GameObject {
    constructor () {
        super();

        this.speed = 10 //[px/s]
    }
}

Engine.Images.register('RoadTile', {
    origin: [0,0],
    size: [600, 150],
    url: './assets/images/road.png'
});

Engine.ObjectFactory.register('RoadTile', RoadTile);

export default Road;
