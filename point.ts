// To avoid cohesion principle volation use class


// use export keyword before class to use it in other files
// after add that this file will be module according to TS

export class Points{
    // Public, private, protected access modifiers in TS

    // private x: number;
    // private y: number;

    // Typescript class has only one constructor
    
    constructor(private x?: number, private y?: number){
        // this.x = x;
        // this.y = y;
        // Ts compiler will initialize the values 
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    get_distance(another: Points){
        // ...
    }

    // Typescript properties 

    getX(){
        return this.x;
    }

    setX(value: number){
        if (value < 0){
            throw new Error('value cannot be less than 0.');
        }

        this.x = value;
    }



}