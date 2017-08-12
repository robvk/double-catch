/*
 Game Manager using the singleton pattern.
 TODO: Singleton not really working as expected... why a class if you have to go global anyway?!
  */

let GAME_MANAGER = null;

function startGame() {
    new KeyInputHandler();
    new GameManager();
    GameManager.start();
}

class GameManager {
    constructor() {
        if(!GAME_MANAGER) {
            this.horizontalPaddle = new HorizontalPaddle();
            this.verticalPaddle = new VerticalPaddle();
            this.canvas = document.getElementById("playingField");
            this.ctx = this.canvas.getContext("2d");
            this.flyingObjects = [];
            GAME_MANAGER = this;
        }

        return GAME_MANAGER;
    }

    static start() {
        setInterval(GameManager.update, 20);
        setInterval(GameManager.addNewFlyingObject, 2000);
    }

    static update() {
        GAME_MANAGER.horizontalPaddle.update();
        GAME_MANAGER.verticalPaddle.update();
        GAME_MANAGER.flyingObjects.forEach(function(object) {
            object.update();
        });
        GAME_MANAGER.ctx.clearRect(0, 0, windowWidth(), windowHeight());
        GAME_MANAGER.horizontalPaddle.draw(GAME_MANAGER.ctx);
        GAME_MANAGER.verticalPaddle.draw(GAME_MANAGER.ctx);
        GAME_MANAGER.flyingObjects.forEach(function(object) {
            object.draw(GAME_MANAGER.ctx);
        });
    }

    static addNewFlyingObject() {
        GAME_MANAGER.flyingObjects.push(new FlyingObject())
    }
}

