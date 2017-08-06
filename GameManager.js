/*
 Game Manager using the singleton pattern.
 TODO: Singleton not really working as expected... why a class if you have to go global anyway?!
  */
let GAME_MANAGER = null;

function startGame() {
    new KeyInputHandler();
    new GameManager();
    GAME_MANAGER.start();
}

class GameManager {
    constructor() {
        if(!GAME_MANAGER) {
            this.horizontalPaddle = new HorizontalPaddle();
            this.canvas = document.getElementById("playingField");
            this.ctx = this.canvas.getContext("2d");
            GAME_MANAGER = this;
        }

        return GAME_MANAGER;
    }

    static start() {
        setInterval(GAME_MANAGER.update, 20);
    }

    static update() {
        GAME_MANAGER.horizontalPaddle.update();
        GAME_MANAGER.ctx.clearRect(0, 0, windowWidth(), windowHeight());
        GAME_MANAGER.horizontalPaddle.draw(GAME_MANAGER.ctx);
    }
}

