/*
 Our GameObject class can draw itself and handles collision detection

 We use a visitor pattern for collision. If you subclass this make sure to:
 - set the visitCollision function in the constructor. Convention is 'visitCollisionWith' + Class name as function
 - add your visitCollisionWith method to this class handling anything
 - override any visitCollisionWith methods you want to handle
 - both objects are sent the collision notice, so only implement one side!

 draw(ctx) - draws our object on the given canvas context
 checkCollisionWith(otherObject) - checks if there is a collision. If there is calls visitCollision object
 */

 class GameObject {
    constructor() {
        // Set some default values, we expect subclasses to override this
         this._leftTopCorner = {
             x: 0,
             y: 0,
         },
         this._height = 10,
         this._width = 10,
         this.visitCollision = function(otherObject) {
             otherObject.visitCollisionWithGameObject(this);
         }
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.fillRect(this._leftTopCorner.x, this._leftTopCorner.y, this._width, this._height);
        ctx.closePath();
    }

    /*
    Return the y-aspect of the bottom of the game object
    */
    bottomY() {
        return this._leftTopCorner.y + this._height;
    }

    /*
    Return the y-aspect of the top of the game object
    */
    topY() {
        return this._leftTopCorner.y;
    }

    /*
    Return the x-aspect of the left side of the game object
    */
    leftX() {
        return this._leftTopCorner.x;
    }

    /*
    Return the x-aspect of the right side of the game object
    */
    rightX() {
        return this._leftTopCorner.x + this._width;
    }

    /*
    Check if you collide with the other GameObject. If so, call the visit methods on the objects.
    */
    checkCollisionWith(otherObject) {
        if(! ((this.bottomY() < otherObject.topY()) ||
            (this.topY() > otherObject.bottomY()) ||
            (this.leftX() > otherObject.rightX()) ||
            (this.rightX() < otherObject.leftX()))) {
            this.visitCollision(otherObject);
            otherObject.visitCollision(this);
        }
    }

    /* VISITOR handle methods */
    visitCollisionWithGameObject(otherObject) {
        // noop, base does nothing!
    }
    
    visitCollisionWithPaddle(otherObject) {
        // noop, base does nothing!
    }

    visitCollisionWithFlyingObject(otherObject) {
        // noop, base does nothing!
    }
 }
