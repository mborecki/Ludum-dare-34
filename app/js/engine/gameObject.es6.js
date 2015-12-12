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

    constructor () {
        this._ = {};
    }

    reset () {
        x = 0;
        y = 0;
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
    }

    addRenderer (renderer) {
        this.draw = renderer.draw;
        this.renderer = renderer;
    }
}

export default GameObject;
