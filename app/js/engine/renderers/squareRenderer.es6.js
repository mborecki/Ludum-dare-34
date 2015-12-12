import AbstractRenderer from './abstractRenderer.es6';

class SquareRenderer extends AbstractRenderer {
    constructor(params) {
        super(params);

        this.color = params.color || '#fff';
        this.size = params.size || 100;
    }

    draw (ctx, location) {
        ctx.fillStyle = this.color;
        ctx.fillRect(0 + location[0], 0 + location[1], this.size + location[0], this.size + location[1]);
    }
}

export default SquareRenderer;
