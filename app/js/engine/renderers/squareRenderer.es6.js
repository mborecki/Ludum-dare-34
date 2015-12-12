import AbstractRenderer from './abstractRenderer.es6';

import Vector2d from './../helpers/vector2d.es6';

let PI = Math.PI

class SquareRenderer extends AbstractRenderer {
    constructor(params) {
        super(params);

        this.color = params.color || '#fff';
        this.size = params.size || 100;
        this.rotation = params.rotation || (PI/4);

        // Object <- renderer position.
        this.position = [0,0];
    }

    draw (ctx, objLocation) {
        ctx.fillStyle = this.color;

        let size = this.size / 2;

        let v1 = Vector2d.add(objLocation, this.position, Vector2d.rotate([size, size], this.rotation));
        let v2 = Vector2d.add(objLocation, this.position, Vector2d.rotate([-size, size], this.rotation));
        let v3 = Vector2d.add(objLocation, this.position, Vector2d.rotate([-size, -size], this.rotation));
        let v4 = Vector2d.add(objLocation, this.position, Vector2d.rotate([size, -size], this.rotation));

        ctx.beginPath();
        ctx.moveTo(v1[0], v1[1]);
        ctx.lineTo(v2[0], v2[1]);
        ctx.lineTo(v3[0], v3[1]);
        ctx.lineTo(v4[0], v4[1]);
        ctx.closePath();
        ctx.fill();
    }

    rotate(rad) {
        this.rotation = (this.rotation + rad) % (2*PI);
    }
}

export default SquareRenderer;
