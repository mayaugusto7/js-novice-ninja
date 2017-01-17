console.log();
console.log("Arrays Init...");
console.log();

//var myArray = []; or var myArray = new Array(); typeof [] << "object"

console.log();
console.log("Arrays Add...");
console.log();

var pizzas = [];
console.log(pizzas[0]); //undefined

pizzas[0] = "Marguerita";
pizzas[0] = "Ham & Pineapple"; // alterando o valor
pizzas[1] = "Mushroom";
pizzas[2] = "Spinach & Rocket";
pizzas[5] = "Pineapple & Sweetcorn";

console.log(pizzas);

console.log();
console.log("Arrays Literals...");
console.log();

var pizzas = ["Marguerita", "Mushroom", "Spinach & Rocket", "Pineapple & Sweetcorn"];
console.log(pizzas);

console.log();
console.log("Arrays Mixed...");
console.log();

var mixedArray = [null, 1, "two", true, undefined, {}];
console.log(mixedArray);

console.log();
console.log("Remove values Arrays...");
console.log();

delete pizzas[3];
console.log(pizzas);