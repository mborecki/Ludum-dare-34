import GameObject from './../../engine/gameObject.es6';
import StaticSpriteRenderer from './../../engine/renderers/staticSpriteRenderer.es6';
import Images from './../../engine/images.es6';

import Rotate from './../scripts/rotateRenderer.es6';
import Move from './../scripts/moveObject.es6';

class TestObject extends GameObject {
    constructor () {
        super();

        Images.register('TestObjectStaticSprite', {
            url: 'assets/images/sample.png',
            origin: [0, 0],
            size: [50, 50]
        });

        this.addComponent(new StaticSpriteRenderer({
            size: 50,
            image: 'TestObjectStaticSprite'
        }));

        this.addComponent(new Rotate());
        this.addComponent(new Move());
    }
}

export default TestObject;
