/*
 Our Vertical Paddle class.

 update() - checks if the user is trying to move the paddle and moves if needed
 draw(ctx) - draws our paddle on the given canvas context
 */

const VERTICAL_PADDLE_HEIGHT = yGridBlockSize() * 12;
const VERTICAL_PADDLE_WIDTH = xGridBlockSize();

class VerticalPaddle {
    constructor() {
        this._leftTopCorner = {
            x: Math.floor(0),
            y: Math.floor(VERTICAL_BLOCKS / 2 - VERTICAL_PADDLE_WIDTH / 2),
        }
    };

    moveUp() {
        this._leftTopCorner.y = this._leftTopCorner.y - VERTICAL_PADDLE_HEIGHT / 12;
    }

    moveDown() {
        this._leftTopCorner.y = this._leftTopCorner.y + VERTICAL_PADDLE_HEIGHT / 12;
    }

    update() {
        if(keyHandler.getInstance().isUpPressed()) this.moveUp();
        if(keyHandler.getInstance().isDownPressed()) this.moveDown();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillRect(this._leftTopCorner.x, this._leftTopCorner.y, VERTICAL_PADDLE_WIDTH, VERTICAL_PADDLE_HEIGHT);
        ctx.closePath();
    }
}