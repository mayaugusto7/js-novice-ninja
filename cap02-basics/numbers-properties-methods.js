console.log(typeof 3);
console.log(typeof 3.14159);

/**
 * HexaDecimal
 */
console.log(0xAF);

/**
 * Exponencial
 */
console.log(1e6); //means 1 multiplied by 10 to the power 6
console.log(2e3);

/**
 * Methods Exponencial
 * 
 * dois pontos
 */
console.log(5..toExponential());

/* 
 * um espaço com ponto
 */
console.log(5 .toExponential());

/**
 * Exponencial decimal
 * 
 */
console.log(5.0.toExponential());

/**
 * Exponencial entre parenteses
 */
console.log((5).toExponential());

/**
 * Exponencial variavel
 */
var number = 5;
console.log(number.toExponential());

/**
 * Fixed casas apos o ponto
 */
var pi = 3.1415926;
console.log(pi);

console.log(pi.toFixed(3));

/**
 * toPrecision arrendonda um numero
 */
console.log(325678..toPrecision(2));
console.log(2.459.toPrecision(2));
