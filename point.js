"use strict";
// To avoid cohesion principle volation use class
exports.__esModule = true;
exports.Points = void 0;
// use export keyword before class to use it in other files
// after add that this file will be module according to TS
var Points = /** @class */ (function () {
    // Public, private, protected access modifiers in TS
    // private x: number;
    // private y: number;
    // Typescript class has only one constructor
    function Points(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
        // Ts compiler will initialize the values 
    }
    Points.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Points.prototype.get_distance = function (another) {
        // ...
    };
    // Typescript properties 
    Points.prototype.getX = function () {
        return this.x;
    };
    Points.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    };
    return Points;
}());
exports.Points = Points;
