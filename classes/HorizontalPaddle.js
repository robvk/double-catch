/*
 Our Horizontal Paddle class.

 draw(ctx) - draws our paddle on the given canvas context
 update() - update your state, run every game 'frame'
 */

class HorizontalPaddle extends GameObject {
    constructor() {
        super();
        this._height = yGridBlockSize();
        this._width = xGridBlockSize() * 12;
        this._leftTopCorner = {
            x: Math.floor(horizontalBlocks() / 2 - this._width / 2),
            y: Math.floor(windowHeight() - this._height),
        }

        // Set up our collisionvisitor function
        this.visitCollision = function(otherObject) {
            otherObject.visitCollisionWithPaddle(this);
        }
    };

    moveLeft() {
        this._leftTopCorner.x = this._leftTopCorner.x - this._width / 12;
    }

    moveRight() {
        this._leftTopCorner.x = this._leftTopCorner.x + this._width / 12;
    }

    update() {
        if(keyHandler.getInstance().isLeftPressed()) this.moveLeft();
        if(keyHandler.getInstance().isRightPressed()) this.moveRight();
    }

    visitCollisionWithFlyingObject(flyingObject) {
        gameManager.getInstance().caughtFlyingObject(flyingObject);
    }
}