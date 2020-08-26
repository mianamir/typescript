function test(message) {
    console.log(message);
}
// global variable
var message = 'Amir Savvy..';
// call the function
test(message);
// variable 
var no = 44; // JS way
var counter = 0; // TS way
// Example
function do_something() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    } // for ends
    // when declaring the variable from var to let then
    // i variable will not avaialble 
    // console.log('Finally:' + i);
} // func ends
do_something();
// Different types in TypeScript
var no1 = 77;
// no1 = 'a';
var no2;
no2 = 2;
// no2 = true;
// no2 = 'b';
var a;
var b;
var c;
var d;
var e = [4, 5, 6];
var f = [4, true, 'g', false];
// Enums in TypeDcript
var Red = 1;
var Green = 2;
var Blue = 3;
var Orange = 4;
var Color = { Red: Red, Green: Green, Blue: Blue, Orange: Orange };
var bg_color = Color.Red;
console.log('BG Color: ' + bg_color);
