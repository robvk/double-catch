/*
 Our Flying object class.

 draw(ctx) - draws our object on the given canvas context
 update() - update your state, run every game 'frame'

 TODO: abstract the class to make a Vertical and Horizontal flying object so it looks
 */

const FLYING_OBJECT_HEIGHT = yGridBlockSize();
const FLYING_OBJECT_WIDTH = xGridBlockSize();

class FlyingObject {
    constructor() {
        if (Math.random() < 0.5) {
            // going from top to bottom
            this._leftTopCorner = {
                x: Math.floor(Math.random() * HORIZONTAL_BLOCKS) * xGridBlockSize(),
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
                y: Math.floor(Math.random() * VERTICAL_BLOCKS) * yGridBlockSize(),
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

    };

    update() {
        this._leftTopCorner.x = this._leftTopCorner.x + (this._directionVector.x * this._speed) * xGridBlockSize();
        this._leftTopCorner.y = this._leftTopCorner.y + (this._directionVector.y * this._speed) * yGridBlockSize();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillRect(this._leftTopCorner.x, this._leftTopCorner.y, FLYING_OBJECT_WIDTH, FLYING_OBJECT_HEIGHT);
        ctx.closePath();
    }
}