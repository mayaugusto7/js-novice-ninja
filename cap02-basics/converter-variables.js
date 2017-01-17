console.log();
console.log("Covert String to Number");
console.log();

answer = "5" * 1;
console.log(answer);
console.log(typeof answer);
console.log(answer = + "5");
console.log(typeof answer);
console.log(Number("23"));

console.log();
console.log("Covert Number to String");
console.log();

console.log(3 + '');
console.log(String(3));
console.log(10..toString(2));
console.log(1000000..toString(36)); // um milhao em base 36

console.log();
console.log("Parsing Numbers");
console.log();

console.log(parseInt("1010", 2)); // convert from binary, back to decimal
console.log(parseInt("omg", 36));
console.log(parseInt("23", 10));

var address = "221B Baker Street";
console.log(parseInt(address, 10));
console.log(Number(address));
console.log(parseInt("2.4", 10));
console.log(parseFloat("2.9", 10));

console.log();
console.log("Booleans");
console.log();

console.log(Boolean("hello")); //string retorna true
console.log(Boolean(42)); //number retorna true
console.log(Boolean(0)); // 0 retorna false

console.log();
console.log("Logical Operators");
console.log();

console.log();
console.log("Not Operator");
console.log();

//not !
console.log(!true);
console.log(!0); // boolean 0 = false

//negando a negacao com !!
console.log(!!'');
console.log(!!"Hello");
console.log(!!3);
console.log(!!NaN);
console.log(!!"false");
console.log(!!'0');

console.log();
console.log("&& and Operator");
console.log();

console.log(true && true);
console.log(3 && 0); //returns 0 because it is falsy

console.log();
console.log("|| or Operator");
console.log();

console.log(true || false);
console.log(NaN || undefined);


