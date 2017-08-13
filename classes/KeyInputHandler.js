/*
 KeyInputHandler using the singleton pattern.

 This class locks onto the window to listen to keyDown and keyUp events. It stores the keys
 that are pressed down.

 For our specific need we added some helper methods to keep the keyCode incapsulated in the class.

 Props to http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/index.html
  */

let keyHandler = (function () {
    let instance;

    function createInstance() {
        return new KeyInputHandler();
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

class KeyInputHandler {
    constructor() {
        /*
            pressedKeys stores the buttons that are pressed
            on a keyDown event the keyCode is added to the array, on keyUp it is removed
         */
        this.pressedKeys = {};
    }

    startListening() {
        // add our handler to the window
        window.addEventListener('keyup', function (event) {
            keyHandler.getInstance().onKeyUp(event);
        }, false);
        window.addEventListener('keydown', function (event) {
            keyHandler.getInstance().onKeyDown(event);
        }, false);
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

    // specific button check
    isLeftPressed() {
        return this.isDown(37); //left arrow
    }

    isRightPressed() {
        return this.isDown(39); //right arrow
    }

    isUpPressed() {
        return this.isDown(81); //q
    }

    isDownPressed() {
        return this.isDown(65); //a
    }
}