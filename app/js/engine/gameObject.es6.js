
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
    }

    update () {
        return this;
    }
}

export default GameObject;
