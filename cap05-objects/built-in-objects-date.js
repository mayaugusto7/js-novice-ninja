console.log();
console.log("Date...");
console.log();

today = new Date();
console.log(today);
console.log();

christmas = new Date('2014 12 25');
console.log(christmas);
console.log();

chanukah = new Date('16 December 2014');
console.log(chanukah);
console.log();

eid = new Date('Saturday, July 18, 2015');
console.log(eid);
console.log();

//new Date(year, month, day, hour, minutes, seconds, milliseconds);

easter = new Date(2015, 3, 05);
console.log(easter);
console.log();

diwali = new Date(1414018800000);
console.log(diwali);

console.log();
console.log("Date Getters...");
console.log();

console.log(diwali.getDay()); // dia da semana quarta-feira
console.log(diwali.getDate()); // dia da semana 22
console.log(diwali.getMonth()); // mes 9
console.log(diwali.getYear()); // ano 114 quebrado
console.log(diwali.getFullYear()); // ano 2014
console.log(diwali.getTime()); // tempo 1000 * 60 * 60 * 24

christmasEve = new Date(christmas.getTime() - 1000 * 60 * 60 * 24);
console.log(christmasEve);
console.log(new Date().getTimezoneOffset());

//Altera valores de data
console.log();
console.log("Date Setters...");
console.log();

console.log(diwali.setDate(1));
console.log(diwali.setMonth(10)); //november
console.log(diwali.setFullYear(2015));
console.log(diwali.setTime(1447200000000));
