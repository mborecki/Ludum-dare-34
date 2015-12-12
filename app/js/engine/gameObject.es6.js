import {TYPE as COMPONENT_TYPE_RENDERER} from './renderers/abstractRenderer.es6';
import {TYPE as COMPONENT_TYPE_SCRIPT} from './script.es6';
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

    get isUpdateable() {
        return this._.needUpdate || false;
    }

    get location() {
        return [this.x, this.y];
    }

    constructor (params) {
        this._ = {};
        this._.needUpdate = false;

        this.scripts = [];
        this.updateScripts = [];

        this.reset();
        this.updateParams(params)
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

    update (dT) {
        let c = this.updateScripts.length;
        for (let i = 0; i < c; i++) {
            this.updateScripts[i].update(dT);
        }
    }

    updateParams (params = {}) {
        this.x = params.x || 0;
        this.y = params.y || 0;

        return this;
    }

    addComponent (component) {
        switch (component.type) {
            case COMPONENT_TYPE_RENDERER:
                this.addRenderer(component);
                break;

            case COMPONENT_TYPE_SCRIPT:
                this.addScript(component);
                break;

            default:
                console.warn(`Unknow component type: ${component.type}`);
        }

        component.object = this;
    }

    addRenderer (renderer) {
        console.log('addRenderer', renderer)
        this.draw = (ctx) => renderer.draw(ctx, this.location);
        this.renderer = renderer;
    }

    addScript (script) {
        this.scripts.push(script);

        if (typeof script.update === 'function') {
            this.updateScripts.push(script);
            this._.needUpdate = true;
        }
    }
}

export default GameObject;
