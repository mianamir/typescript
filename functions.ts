let greet: Function;

greet = () => {
    console.log('greeting message.');
}

// this will return void 
const add = (number1: number, number2: number, number3?: number | string ): void =>{
    console.log(number1 + number2);
}

add(23, 23, '56');


// return number
const minus = (number1: number, number2: number): number =>{
    return (number1 - number2);
}

minus(23, 23);