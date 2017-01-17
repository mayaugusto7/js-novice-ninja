// Dados estruturados
// Estes objetos representam e interagem com buffers de dados estruturados e dados codificados usando JavaScript Object Notation (JSON).
console.log();
console.log("JSON...");
console.log();

var batman = '{"name": "Batman","real name": "Bruce Wayne","height":74,"weight": 210,"hero": true,"villain": false,"allies": ["Robin","Batgirl","Superman"]}';

console.log("JSON Object");
console.log(batman);
console.log();

// tranform JSON string in JavaScript Object
//JSON.parse(batman); no change values
batman = JSON.parse(batman);

console.log("JavaScript Object parse()");
console.log(batman);
console.log();

batman = JSON.stringify(batman);

console.log("JSON Object stringify()");
console.log(batman);
console.log();

