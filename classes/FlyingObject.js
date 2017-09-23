/*
 Our Flying object class.

 draw(ctx) - draws our object on the given canvas context
 update() - update your state, run every game 'frame'

 TODO: abstract the class to make a Vertical and Horizontal flying object so it looks
 */

const FLYING_OBJECT_HEIGHT = yGridBlockSize();
const FLYING_OBJECT_WIDTH = xGridBlockSize();

class FlyingObject extends GameObject {
    constructor() {
        super();
        if (Math.random() < 0.5) {
            // going from top to bottom
            this._leftTopCorner = {
                x: Math.floor(Math.random() * horizontalBlocks()) * xGridBlockSize(),
                y: 0,
            };
            this._directionVector = {
                x: 0,
                y: 1,
            }
        } else {
            // going from right to left
            this._leftTopCorner = {
                x: windowWidth(),
                y: Math.floor(Math.random() * verticalBlocks()) * yGridBlockSize(),
            };
            this._directionVector = {
                x: -1,
                y: 0,
            }
        };
        /*  Fixed speed for now, possibly varying speeds in the future.
            The speed indicates the amount of blocks the object moves every game 'frame'
         */
        this._speed = 1;
        this._height = yGridBlockSize();
        this._width = xGridBlockSize();

        // Set up our collisionvisitor function
        this.visitCollision = function(otherObject) {
            otherObject.visitCollisionWithFlyingObject(this);
        }
    };

    isOutOfArea() {
        return this.leftX() < 0 || this.bottomY() > windowHeight();
    }

    update() {
        this._leftTopCorner.x = this._leftTopCorner.x + (this._directionVector.x * this._speed) * xGridBlockSize();
        this._leftTopCorner.y = this._leftTopCorner.y + (this._directionVector.y * this._speed) * yGridBlockSize();
    }
}