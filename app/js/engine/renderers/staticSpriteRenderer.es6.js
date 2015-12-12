import AbstractRenderer from './abstractRenderer.es6';
import Images from './../images.es6';

import Vector2d from './../helpers/vector2d.es6';

let PI = Math.PI

class StaticSpriteRender extends AbstractRenderer {
    constructor(params) {
        super(params);

        this.image = Images.getImage(params.image)
        this.size = params.size || 100;

        this.rotation = 0;

        // Object <- renderer position.
        this.position = [0,0];
    }

    draw (ctx, objLocation) {
        let size = this.size;
        let halfSize = this.size / 2;

        let v = Vector2d.add(objLocation, this.position);

        // debugger;

        ctx.save();
        ctx.translate(v[0], v[1]);
        ctx.rotate(-this.rotation);
        ctx.drawImage(this.image, -halfSize, -halfSize, size, size);
        ctx.restore();
    }

    rotate(rad) {
        this.rotation = (this.rotation + rad) % (2*PI);
    }
}

export default StaticSpriteRender;
