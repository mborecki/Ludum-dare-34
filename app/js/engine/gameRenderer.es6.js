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

    remove(i) {
        this.objects.splice(i, 1);
    }

    draw(callback) {
        // if (window.test) console.log('draw');
        this.bufferCtx.clearRect(0, 0, this.width, this.height );
        for(let i=0; i < this.objects.length; i++) {
            if (this.objects[i].destroyed) {
                this.remove(i);
                continue;
            }

            this.objects[i].draw(this.bufferCtx);
        }



        this.ctx.clearRect(0, 0, this.width, this.height );
        this.ctx.drawImage(this.buffer, 0, 0);

        // if (window.test && this.bufferCtx.getImageData(110, 530, 1, 1).data[0] !== 255) {
        //     debugger;
        // }

        callback();
        // if (window.test) console.log('draw end');
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
