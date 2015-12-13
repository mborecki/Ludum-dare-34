import Engine from './../../engine/engine.es6';
import GameObject from './../../engine/gameObject.es6';
import StaticSpriteRenderer from './../../engine/renderers/staticSpriteRenderer.es6';

class Car extends GameObject {
    constructor() {
        super();

        this.addComponent(new StaticSpriteRenderer({
            image: 'Car2',
            size: [50, 100]
        }))

        this.positions = [];
        this.speed = 10;
        this.speedMod = 1;

        this.rotationSpeed = Math.PI / 32;
    }

    updateParams(params = {}) {
        super.updateParams(params);

        if (params.positions) {
            this.positions = params.positions
        }

        if (params.roadPosition) {
            this.roadPosition = params.roadPosition;
            this.x = this.positions[this.roadPosition]
        }

        if (params.speedMod) {
            this.speedMod = params.speedMod;
            if (this.speedMod < 0 ) {
                this.renderer.rotation = Math.PI;
            }
        }

        return this;
    }

    update (dt) {
        this.y += (this.speed - (this.speed * this.speedMod)) * (dt / 1000);
    }

    set roadPosition(p) {
        this._roadPosition = p;
    }

    get roadPosition() {
        return this._roadPosition;
    }

    create() {
        super.create();

        this._.needUpdate = true;

        return this;
    }
}

Engine.Images.register('Car2', {
    origin: [0,0],
    size: [50, 100],
    url: 'assets/images/car2.png'
})

Engine.ObjectFactory.register('Car1', Car);

export default Car;
