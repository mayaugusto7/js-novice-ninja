console.log();
console.log("Functions Return Values...");
console.log();

function yo() {
    return "Yo World!";
}

var hi = yo();

console.log(hi);

console.log();
console.log("Functions Parameters Values...");
console.log();

function square(x) {
    return x * x;
}

console.log(square(4.5));
console.log();

function mean(a, b, c) {
    return (a + b + c) / 3;
}

console.log(mean()); // retorna NaN quando nao passo nenhum parametros necessarios e retorno um numero
console.log();

console.log(mean(2, 6, 19));
console.log();

console.log(mean(1, 2)); // retorna NaN quando nao passo todos os parametros necessarios e retorno um numero
console.log();

console.log(mean(1, 2, 3, 4, 5));
console.log();

function hello(message) {
    return "Hello: " + message;
}

console.log(hello()); // retorna undefined quando nao passo todos os parametros e retorna uma string
console.log();

// arguments variavel ela não é um array
function arguments() {
    return arguments;
}