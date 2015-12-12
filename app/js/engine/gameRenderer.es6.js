class GameRenderer {
    constructor (c) {
        this.objects = [];
    }

    add(object) {
        this.objects.push(object);
        this.objects.sort((a, b) => {
            return a.layer - b.layer;
        });
    }

    draw() {
        this.bufferCtx.clearRect(0, 0, this.width, this.height );
        for(let i=0; i < this.objects.length; i++) {
            if (this.objects[i].destroyed) {
                remove(i);
                continue;
            }

            this.objects[i].draw(this.bufferCtx);
        }

        this.ctx.clearRect(0, 0, this.width, this.height );
        this.ctx.drawImage(this.buffer, 0, 0);
    }

    set canvas(c) {
        this.ctx = c.getContext('2d');

        let buffer = document.createElement('canvas');
        this.width = buffer.width = canvas.width;
        this.height = buffer.height = canvas.height;

        this.buffer = buffer;
        this.bufferCtx = buffer.getContext('2d');

        console.log('set canvas', this);
    }
}

export default GameRenderer;
