import GameObject from './../engine/gameObject.es6';
import SquareRenderer from './../engine/renderers/squareRenderer.es6';

import Rotate from './scripts/rotateRenderer.es6';
import Move from './scripts/moveObject.es6';

class TestObject extends GameObject {
    constructor () {
        super();

        this.addComponent(new SquareRenderer({
            size: 50,
            color: '#f00'
        }));

        this.addComponent(new Rotate());
        this.addComponent(new Move());
    }
}

export default TestObject;
