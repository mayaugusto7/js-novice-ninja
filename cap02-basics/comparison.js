console.log();
console.log("Comparators Simplify ==");
console.log();

answer = 5;

//Compara e faz a coercao do valor para retornar true
console.log(answer == 5);
console.log(answer == "5"); // comparando numero com string retorna true se for igual
console.log(" " == 0); //true
console.log(" " == "0"); //false
console.log(false == "0"); //true
console.log("1" == true); //true
console.log("2" == true); //false
console.log("true" == true); //false
console.log(null == undefined); //true

//Compara se o valor e o tipo sao iguais
console.log();
console.log("Hard Comparators ===");
console.log();

console.log(answer === 5); //true
console.log(answer === "5"); //false
console.log(NaN === undefined); //false

console.log();
console.log("Hard Comparators === Not a Number (NaN)");
console.log();

console.log(NaN === Nan); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(5)); // false
console.log(isNaN("hello")); // true nao e um numero
console.log(Number("hello")); //NaN nao e um numero
console.log(isnan = NaN);
console.log(notnan = "hello"); // variavel notnan
console.log(typeof(isnan) === "number" && isNaN(isnan)); //true
console.log(typeof(notnan) === "number" && isNaN(notnan)); //false
console.log(Number("5") === 5);

console.log();
console.log("Not Equal Simplify !=");
console.log();

console.log(16 != "16"); //false
console.log(16 !== "16"); //true

console.log();
console.log("Operators >, >=, <, <=");
console.log();

console.log(8 > 4); //true
console.log(8 < 4); //false
console.log(8 >= 4); //true
console.log(8 >= 8); //true
console.log(8 >= "8"); //true

console.log()
console.log(8 > 8 || 8 === 8);





