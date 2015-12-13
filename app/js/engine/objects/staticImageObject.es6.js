import GameObject from './../gameObject.es6';
import StaticSpriteRenderer from './../../engine/renderers/staticSpriteRenderer.es6';

class EStaticImageObject extends GameObject {
    constructor() {
        super();
        this.addComponent(new StaticSpriteRenderer());
    }

    updateParams (params = {}) {
        super.updateParams(params);

        if (typeof params.size !== "undefined") {
            this.size = params.size
            this.renderer.size = this.size;
        }

        if (params.image) {
            this.renderer.loadImage(params.image);
        }

        return this;
    }
}

export default EStaticImageObject;
