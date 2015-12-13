import AbstractRenderer from './abstractRenderer.es6';
import Images from './../images.es6';

import Vector2d from './../helpers/vector2d.es6';

let PI = Math.PI

class StaticSpriteRender extends AbstractRenderer {
    constructor(params) {
        super(params);

        this.image = Images.getImage(params.image)

        if (typeof params.size === "number") {
            this.size = [params.size, params.size];
        } else {
            this.size = params.size || [100, 100];
        }

        this.halfSize = Vector2d.MultiplyNumber(this.size, 0.5);

        this.rotation = 0;

        // Object <- renderer position.
        this.position = [0,0];
    }

    draw (ctx, objLocation) {
        let halfSize = this.halfSize;
        let size = this.size;

        let v = Vector2d.add(objLocation, this.position);

        // debugger;

        ctx.save();
        ctx.translate(v[0], v[1]);
        ctx.rotate(-this.rotation);
        ctx.drawImage(this.image, -halfSize[0], -halfSize[1], size[0], size[1]);
        ctx.restore();
    }

    rotate(rad) {
        this.rotation = (this.rotation + rad) % (2*PI);
    }
}

export default StaticSpriteRender;
