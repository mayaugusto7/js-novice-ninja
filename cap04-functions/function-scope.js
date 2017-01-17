console.log();
console.log("Functions Scope Values...");
console.log();

var a = 1;  // local variable

function locala() {
    var a = 3; // local variable
    console.log("a inside function: " + a); //3
}

locala();

console.log("a inside function: " + a); //1
console.log();

b = 2;

function localb() {
    b = 4; // overwrites the global variable
    console.log("b inside function: " + b); //4
}

localb();

console.log("b inside function: " + b); //4
console.log();

function localc() {
    c = 5; // global variable
    console.log("c inside function: " + c); //5
}

localc();

console.log("c inside function: " + c); //5
console.log();

function locald() {
    var d = 6; // create local variable
    console.log("d inside function: " + d); //6
}

//console.log("d inside function: " + d); //d is not defined error
console.log();
console.log("Functions Hosting Values...");
console.log();

function hoist() {
    console.log(a); // at this point a is undefined
    //
    // imagine lots more code here
    //
    var a = "Hoist Me!";
    console.log(a); // now is a string
}

add(2, 5); // isso vai funcionar porque a função add é içada e usado um guindaste para chamar a funcao

function add(x, y) {
    console.log(x + y);
}

console.log();

subtract(5, 2); //subtract is not defined error

subtract = function (x, y) {
    console.log(x - y);
}

