console.log();
console.log("Functions Default Values...");
console.log();

function hello(name) {
    console.log("Hello " + name + "!");
}

hello("DAZ");
hello();

function hello2(name) {
    
    if (name === undefined) {
        name = " World ";
    }

    console.log("Hello " + name + "!");
}

console.log();

hello2();
hello2("DAZ");

console.log();

function discount(price, amount) {
    if (amount === undefined) amount = 10;

    return price * (100 - amount) / 100;
}

console.log(discount(20));
console.log(discount(15,))