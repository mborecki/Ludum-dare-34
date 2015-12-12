import AbstractRenderer from './abstractRenderer.es6';

class SquareRenderer extends AbstractRenderer {
    constructor(params) {
        super(params);

        this.color = params.color || '#fff';
        this.size = params.size || 100;
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.size, this.size);
    }
}

export default SquareRenderer;
