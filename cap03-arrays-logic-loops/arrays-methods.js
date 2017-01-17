console.log();
console.log("Arrays Methods length, push, pop, shift e unshift...");
console.log();

var pizzas = ["Margherita", "Mushroom", "Spinach & Rocket", "Ham & Pinapple", "Pineapple & Sweetcorn"];

console.log(pizzas.length);
console.log();
console.log(pizzas[pizzas.length - 1]);
console.log();

// A propriedade length e mutavel em javascript
pizzas.length = 8;

console.log(pizzas);
console.log();

pizzas.length = 3;

pizzas.pop(); //remove o ultimo elemento
console.log(pizzas); 
console.log();

pizzas.push("Pepperoni"); //adiciona um novo elemento
console.log(pizzas);
console.log();

pizzas.shift(); // remove primeiro elemento
console.log(pizzas);
console.log();

pizzas.unshift("Chicken & Bacon"); // add na base da pilha
pizzas.unshift("Chicken"); 
console.log(pizzas);
console.log();