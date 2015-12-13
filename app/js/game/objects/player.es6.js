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
    }
}

Engine.Images.register('PlayerCar', {
    origin: [0,0],
    size: [50, 100],
    url: 'assets/images/car.png'
})

Engine.ObjectFactory.register('Player', Player);

export default Player;
