console.log();
console.log("Functions Init...");
console.log

function hello() {
    console.log("Hello World!");
}

// funcao anonima
var goodbye = function() {
    console.log("Goodbye World!");
};

var goodbye2 = function bye() {
    console.log("Goodbye World!");
};

console.log(hello());
console.log(goodbye);
console.log(goodbye2);
//console.log(bye()); // bye not function 

hi = new Function('console.log("Hi World!");');
console.log(hi);
console.log();

