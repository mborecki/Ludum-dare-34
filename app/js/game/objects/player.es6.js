import Engine from './../../engine/engine.es6';
import GameObject from './../../engine/gameObject.es6';
import StaticSpriteRenderer from './../../engine/renderers/staticSpriteRenderer.es6';

class Player extends GameObject {
    constructor() {
        super();

        this.addComponent(new StaticSpriteRenderer({
            image: 'PlayerCar',
            size: [50, 100]
        }))

        this.positions = [];
        this.speed = 10;

        this.STATES = {
            IDLE: 0,
            LEFT: 1,
            RIGHT: 2,
            PREIDLE: 3,
        }

        this.rotationSpeed = Math.PI / 32;

        this.state = this.STATES.IDLE
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

        return this;
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

    update(dt) {
        let but1 = Engine.Input.down('button_1')
        let but2 = Engine.Input.down('button_2')
        super.update(dt);

        if (but1) {

                switch(this.state) {
                    case this.STATES.IDLE:
                    case this.STATES.RIGHT:
                        this.goLeft();

                        if (this.roadPosition > 0) {
                            this.roadPosition = this.roadPosition - 1;
                        }

                        break;
                }
        }

        if (but2) {

            switch(this.state) {
                case this.STATES.IDLE:
                case this.STATES.LEFT:
                    this.goRight();
                    if (this.roadPosition < this.positions.length - 1) {
                        this.roadPosition = this.roadPosition + 1;
                    }

                    break;
            }
        }

        let v = this.x - this.positions[this.roadPosition]
        let av = Math.abs(v);
        let side = v / Math.abs(v);
        let move = this.speed * (dt / 1000);

        if (move > av) {
            this.x = this.positions[this.roadPosition];
        } else {
            this.x += (-side * move);
        }

        if (this.state !== this.STATES.IDLE &&
            Math.abs(this.x - this.positions[this.roadPosition]) < 3) {
            this.state = this.STATES.IDLE;
        }
    }

    goRight () {
        this.state = this.STATES.RIGHT

    }

    goLeft () {
        this.state = this.STATES.LEFT
    }
}

Engine.Images.register('PlayerCar', {
    origin: [0,0],
    size: [50, 100],
    url: 'assets/images/car.png'
})

Engine.ObjectFactory.register('Player', Player);

export default Player;
