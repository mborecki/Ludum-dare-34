import {TYPE as COMPONENT_TYPE_RENDERER} from './renderers/abstractRenderer.es6';
import Engine from './engine.es6';

class GameObject {

    get x () {
        return this._.x;
    }

    set x (x) {
        this._.x = x
    }

    get y () {
        return this._.y;
    }

    set y (y) {
        this._.y = y;
    }

    get isDrawable() {
        return !this.destroyed && typeof this.draw === "function";
    }

    constructor (params) {
        this._ = {};
        this.reset();
        this.update(params)
    }

    reset () {
        this.x = 0;
        this.y = 0;
    }

    destroy () {
        this.destroyed = true;
    }

    create () {
        this.destroyed = false;
        Engine.addObject(this);
        return this;
    }

    update () {
        return this;
    }

    addComponent (component) {
        switch (component.type) {
            case COMPONENT_TYPE_RENDERER:
                this.addRenderer(component);
                break;

            default:
                console.warn(`Unknow component type: ${component.type}`);
        }

        component.object = this;
    }

    addRenderer (renderer) {
        this.draw = (ctx) => renderer.draw(ctx);
        this.renderer = renderer;
    }
}

export default GameObject;
