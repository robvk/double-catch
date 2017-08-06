// TODO: figure out if there is a better way to handle globals (Class constants maybe? Gogo js knowledge!)

// Props to http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/index.html

let KEY_HANDLER = null;

LEFT = 37;
RIGHT = 39;

// for second paddle later!
A = 97;
Q = 113;

class KeyInputHandler {
    constructor() {
        if(!KEY_HANDLER) {
            this.pressedKeys = {};
            KEY_HANDLER = this;
            window.addEventListener('keyup', function(event) { KEY_HANDLER.onKeyUp(event); }, false);
            window.addEventListener('keydown', function(event) { KEY_HANDLER.onKeyDown(event); }, false);
        }

        return KEY_HANDLER;
    }


    isDown(keyCode) {
        return this.pressedKeys[keyCode];
    }

    onKeyDown(event) {
        this.pressedKeys[event.keyCode] = true;
    }

    onKeyUp(event) {
        this.pressedKeys[event.keyCode] = false;
    }

    isLeftPressed() {
        return this.isDown(LEFT);
    }

    isRightPressed() {
        return this.isDown(RIGHT);
    }
}