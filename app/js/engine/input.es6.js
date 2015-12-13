let singleton = null;

export const KEY_MAP = {
    'A' : 65,
    'D' : 68,
    'S' : 83,
    'LEFT': 37,
    'RIGHT': 39
}

class Input {
    constructor() {
        this.initListeners();

        this.actionState = {};
        this.bindigs = {}

        this.TYPE = KEY_MAP;
    }

    initListeners () {
        window.addEventListener('keydown', (e) => {
            this.keyDown(e.keyCode);
        });

        window.addEventListener('keyup', (e) => {
            this.keyUp(e.keyCode);
        });
    }

    keyDown (keyCode) {
        let action = this.bindigs[keyCode]
        if (typeof action !== "undefined") {
            this.actionState[action] = true;
        }
    }

    keyUp (keyCode) {
        let action = this.bindigs[keyCode]
        if (typeof action !== "undefined") {
            this.actionState[action] = false;
        }

    }

    bindAction (actionName, ...keycodes) {
        for (var i = 0; i < keycodes.length; i++) {
            this.bindigs[keycodes[i]] = actionName;
        }
    }

    down(name) {
        return !!this.actionState[name];
    }

    clear() {
        for(let i in this.actionState) {
            if (this.actionState.hasOwnProperty(i)) {
                this.actionState[i] = false;
            }
        }
    }
}

if (!singleton) {
    singleton = new Input();
}

export default singleton;
