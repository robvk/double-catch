/*
 Our Vertical Paddle class.

 update() - checks if the user is trying to move the paddle and moves if needed
 draw(ctx) - draws our paddle on the given canvas context
 */

class VerticalPaddle extends GameObject {
    constructor() {
        super();
        this._height = yGridBlockSize() * 12;
        this._width = xGridBlockSize();
        this._leftTopCorner = {
            x: Math.floor(0),
            y: Math.floor(verticalBlocks() / 2 - this._width / 2),
        }

        // Set up our collisionvisitor function
        this.visitCollision = function(otherObject) {
            otherObject.visitCollisionWithPaddle(this);
        }
    };

    moveUp() {
        this._leftTopCorner.y = this._leftTopCorner.y - this._height / 12;
    }

    moveDown() {
        this._leftTopCorner.y = this._leftTopCorner.y + this._height / 12;
    }

    update() {
        if(keyHandler.getInstance().isUpPressed()) this.moveUp();
        if(keyHandler.getInstance().isDownPressed()) this.moveDown();
    }

    visitCollisionWithFlyingObject(flyingObject) {
        gameManager.getInstance().caughtFlyingObject(flyingObject);
    }
}