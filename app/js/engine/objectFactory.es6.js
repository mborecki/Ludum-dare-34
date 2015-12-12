let singleton = null;

class ObjectFactory {
    constructor () {
        this.types = {};
    }

    /**
     * Register object type in system.
     *
     * @param  {[type]}  name                [description]
     * @param  {[type]}  objectClass         [description]
     * @param  {Boolean} options.createPoll  [description]
     * @param  {Number}  options.itemsInPoll [description]
     * @return {[type]}                      [description]
     */
    register (name, objectClass, {createPool=true, itemsInPoll=10} = {}) {
        if (typeof this.types[name] !== "undefined") {
            console.warn(`Override gameObject type ${name}`);
        }

        this.types[name] = {
            const: objectClass,
            pool: !createPool ? null : (() => {
                let p = [];
                for (let i=0; i < itemsInPoll; i++) {
                    let o = new objectClass();
                    o.destroy();
                    p.push(o);
                }

                return p;
            })()
        };
    }

    spawn (typeName, params = {}) {
        let type = this.types[typeName];
        let o = null;

        if (type.pool !== null) {
            o = type.pool.find((item) => {
                return item.destroyed;
            }) || null;
        }

        if (o === null) {
            console.warn(`Create new object: ${typeName}`);
            o = new type.const();
            if (type.pool !== null) type.pool.push(o);
        }

        return o.update(params).create();
    }
}

if (!singleton) {
    singleton = new ObjectFactory();
}

export default singleton;
