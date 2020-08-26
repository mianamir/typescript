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
