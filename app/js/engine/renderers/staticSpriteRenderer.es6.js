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

        let v1 = Vector2d.add(objLocation, this.position, Vector2d.rotate([halfSize, halfSize], this.rotation));
        let v2 = Vector2d.add(objLocation, this.position, Vector2d.rotate([-halfSize, halfSize], this.rotation));
        let v3 = Vector2d.add(objLocation, this.position, Vector2d.rotate([-halfSize, -halfSize], this.rotation));
        let v4 = Vector2d.add(objLocation, this.position, Vector2d.rotate([halfSize, -halfSize], this.rotation));

        // debugger;

        console.log(this.image, v3[0], v3[1], size, size)

        ctx.drawImage(this.image, v3[0], v3[1], size, size);
    }

    rotate(rad) {
        this.rotation = (this.rotation + rad) % (2*PI);
    }
}

export default StaticSpriteRender;
