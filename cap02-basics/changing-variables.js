console.log();
console.log("Changing variables");
console.log();

points = 0;

points = points + 10;
console.log(points);

points += 10;
console.log(points);

points -= 5;
console.log(points);

points *= 2;
console.log(points);

points /= 3;
console.log(points);

points %= 7;
console.log(points);

console.log();
console.log("Increments");
console.log();

points++;
console.log(points);

++points;
console.log(points);

points--;
console.log(points);

--points;
console.log(points);

console.log();
console.log("Infinity");
console.log();

console.log(2e308);
console.log(-1e309);
console.log(1/0);

console.log();
console.log("NaN");
console.log();

console.log("hello" * 5);
console.log(typeof NaN);

console.log();
console.log("Coercion");
console.log();
 
console.log("2" * 8); // multiplicacao funciona string * number = 16
console.log("2" + 8); // adicao concatena nao funciona a operacao valor igual a 28
