let singleton = null;

class Images {
    constructor() {
        this.images = {};
    }

    register (name, params) {
        if (typeof this.images[name] !== "undefined") console.warn(`Repeat image name: ${name}`)

        let img = new Image();
        img.width = params.size[0];
        img.height = params.size[1];

        let buffer = document.createElement('canvas');
        this.images[name] = buffer;

        img.onload = () => {
            buffer.width = params.size[0];
            buffer.height = params.size[1];
            buffer.getContext("2d").drawImage(img, params.origin[0], params.origin[1], params.size[0], params.size[1], 0, 0, params.size[0], params.size[1])
        }

        img.src = params.url;
    }

    getImage (name) {
        return this.images[name];
    }
}

if (!singleton) {
    singleton = new Images();
}

export default singleton;
