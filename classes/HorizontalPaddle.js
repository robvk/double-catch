/*
 Our Horizontal Paddle class.

 draw(ctx) - draws our paddle on the given canvas context
 update() - update your state, run every game 'frame'
 */

const HORIZONTAL_PADDLE_HEIGHT = yGridBlockSize();
const HORIZONTAL_PADDLE_WIDTH = xGridBlockSize() * 12;

class HorizontalPaddle {
    constructor() {
        this._leftTopCorner = {
            x: Math.floor(HORIZONTAL_BLOCKS / 2 - HORIZONTAL_PADDLE_WIDTH / 2),
            y: Math.floor(windowHeight() - HORIZONTAL_PADDLE_HEIGHT),
        }
    };

    moveLeft() {
        this._leftTopCorner.x = this._leftTopCorner.x - HORIZONTAL_PADDLE_WIDTH / 12;
    }

    moveRight() {
        this._leftTopCorner.x = this._leftTopCorner.x + HORIZONTAL_PADDLE_WIDTH / 12;
    }

    update() {
        if(keyHandler.getInstance().isLeftPressed()) this.moveLeft();
        if(keyHandler.getInstance().isRightPressed()) this.moveRight();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillRect(this._leftTopCorner.x, this._leftTopCorner.y, HORIZONTAL_PADDLE_WIDTH, HORIZONTAL_PADDLE_HEIGHT);
        ctx.closePath();
    }
}