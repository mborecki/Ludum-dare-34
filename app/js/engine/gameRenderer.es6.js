class GameRenderer {
    constructor (c) {
        this.canvas = c;
        this.objects = [];
    }

    add(object) {
        this.objects.push(object);
    }

    draw() {
        for(let i=0; i < this.objects.length; i++) {
            if (this.objects[i].destroyed) {
                remove(i);
                continue;
            }

            this.objects[i].draw();
        }
    }
}

export default GameRenderer;
