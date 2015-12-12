import Component from './../component.es6.js';

export const TYPE = 'RENDERER';

class AbstractRenderer extends Component {
    constructor() {
        super();

        this.type = TYPE;
    }

    draw() {

    }

    setParam(name, value) {
        this[name] = value
    }
}

export default AbstractRenderer;
