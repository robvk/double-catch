/*
 Game Manager using the singleton pattern.

 The game manager stores all the game objects and updates/draws them each frame.
  */

let gameManager = (function () {
    let instance;

    function createInstance() {
        return new GameManager();
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

function updateGameFrame() {
    gameManager.getInstance().update();
}

function startGame() {
    new KeyInputHandler();
    setInterval(updateGameFrame, 20);
}

class GameManager {
    constructor() {
        // Game counters
        this.frameCount = 0;
        this.catchCount = 0;
        // Game Objects
        this.horizontalPaddle = new HorizontalPaddle();
        this.verticalPaddle = new VerticalPaddle();
        this.flyingObjects = [];
        // Canvases
        this.canvas = document.getElementById("playingField");
        this.ctx = this.canvas.getContext("2d");
    }

    drawObjects() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, windowWidth(), windowHeight());
        this.horizontalPaddle.draw(ctx);
        this.verticalPaddle.draw(ctx);
        this.flyingObjects.forEach(function (object) {
            object.draw(ctx);
        });
    }

    updateObjects() {
        this.horizontalPaddle.update();
        this.verticalPaddle.update();
        this.flyingObjects.forEach(function (object) {
            object.update();
        });
    }

    updateGame() {
        // update the frame count
        this.frameCount++;

        // check if we need to add new objects to catch
        if (this.frameCount % 100 == 0)
           this.flyingObjects.push(new FlyingObject())

        // TODO: check collisions to see if any objects are caught or off screen!

    }

    update() {
        this.updateGame();
        this.updateObjects();
        this.drawObjects();
    }

}

