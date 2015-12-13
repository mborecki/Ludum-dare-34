import AbstractRenderer from './abstractRenderer.es6';
import Images from './../images.es6';

import Vector2d from './../helpers/vector2d.es6';

let PI = Math.PI

class StaticSpriteRender extends AbstractRenderer {
    constructor(params = {}) {
        super(params);

        this.image = Images.getImage(params.image || '')

        if (typeof params.size === "number") {
            this.size = [params.size, params.size];
        } else {
            this.size = params.size || [100, 100];
        }

        this.rotation = 0;

        // Object <- renderer position.
        this.position = params.position || [0,0];
    }

    draw (ctx, objLocation) {
        if (!this.image) return;

        let halfSize = this.halfSize;
        let size = this.size;

        let v = Vector2d.add(objLocation, this.position);

        ctx.save()
        ctx.translate(v[0], v[1]);
        ctx.rotate(-this.rotation);
        ctx.drawImage(this.image, -halfSize[0], -halfSize[1], size[0], size[1]);
        ctx.rotate(this.rotation);
        ctx.translate(-v[0], -v[1]);
    }

    rotate(rad) {
        this.rotation = (this.rotation + rad) % (2*PI);
    }

    loadImage (name) {
        this.image = Images.getImage(name || '')
    }

    set size(s) {
        this._size = s;
        this.halfSize = Vector2d.MultiplyNumber(this.size, 0.5);
    }

    get size() {
        return this._size;
    }
}

export default StaticSpriteRender;
