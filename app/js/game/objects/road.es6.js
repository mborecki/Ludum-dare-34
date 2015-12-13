import GameObject from './../../engine/gameObject.es6.js';
import Engine from './../../engine/engine.es6.js';

import EStaticImageObject from './../../engine/objects/staticImageObject.es6';


class RoadTile extends EStaticImageObject {
    constructor(params = {}) {
        super(params);
    }

    create () {
        super.create();

        this.updateParams({
            image: 'RoadTile',
            size: [600, 150]
        });

        return this;
    }
}

class RoadTile2 extends EStaticImageObject {
    constructor(params = {}) {
        super(params);
    }

    create () {
        super.create();

        this.updateParams({
            image: 'RoadTile2',
            size: [600, 150]
        });

        return this;
    }
}

class Road extends GameObject {
    constructor () {
        super();

        this.speed = 50 //[px/s]
        this.positionY = 0;
        this.tileStep = 148;

        this.tiles = [];
        this.layer = 10;
    }

    create() {
        super.create();

        this.addTile('RoadTile', 5 * this.tileStep);
        this.addTile('RoadTile', 4 * this.tileStep);
        this.addTile('RoadTile2', 3 * this.tileStep);
        this.addTile('RoadTile', 2 * this.tileStep);
        this.addTile('RoadTile2', 1 * this.tileStep);
        this.addTile('RoadTile2', 0 * this.tileStep);
        this.addTile('RoadTile', -1 * this.tileStep);
        this.addTile('RoadTile2', -2 * this.tileStep);
        this._.needUpdate = true;

        return this;

    }

    update(dT) {
        super.update(dT);

        let dS = this.speed * (dT / 1000);
        this.positionY += dS;

        // console.log(dS , this.position);

        if (this.positionY > this.tileStep) {
            this.positionY -= this.tileStep;

            this.addTile(this.getRandomTitleName(), (-2 * this.tileStep) + this.positionY);

            this.tiles.shift().destroy();
        }

        this.updateTiles(dS);
    }

    updateTiles(dS) {
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].y += dS;
            // if (i > 0)
            //     document.getElementById('t' + i).innerHTML = this.tiles[i].y - this.tiles[i-1].y;
        }
    }

    addTile(nameType, pY) {
        let tile = Engine.ObjectFactory.spawn(nameType, {
            x: 0,
            y: pY
        }, {
            layer: this.layer++
        });

        if (this.layer > 20) {
            this.layer = 10;
        }
        this.tiles.push(tile)
    }

    getRandomTitleName() {
        let r = Math.random();

        switch(true) {
            case r < 0.1:
                return 'RoadTile2';
        }

        return 'RoadTile';
    }
}

Engine.Images.register('RoadTile', {
    origin: [0,0],
    size: [600, 150],
    url: './assets/images/road.png'
});

Engine.Images.register('RoadTile2', {
    origin: [0,150],
    size: [600, 150],
    url: './assets/images/road.png'
});

Engine.ObjectFactory.register('RoadTile', RoadTile);
Engine.ObjectFactory.register('RoadTile2', RoadTile2);
Engine.ObjectFactory.register('Road', Road);

export default Road;
