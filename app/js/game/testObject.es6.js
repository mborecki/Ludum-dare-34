import GameObject from './../engine/gameObject.es6';
import SquareRenderer from './../engine/renderers/squareRenderer.es6';

class TestObject extends GameObject {
    constructor () {
        super();

        this.addComponent(new SquareRenderer({
            size: 10,
            color: '#f00'
        }));
    }
}

export default TestObject;
