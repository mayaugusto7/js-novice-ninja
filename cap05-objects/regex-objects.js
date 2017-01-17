console.log();
console.log("Regex...");
console.log();

// criando expressao
//var pattern = "/\w+ing/";
//var pattern = new RegExp('/\w+ing/');

console.log("Methods Regex...");
var pattern = "/.*ing/";

console.log(pattern.test("joke")); // false
console.log(pattern.test("joking")); // true
console.log(pattern.exec("joke")); // null
console.log(pattern.exec("joking")); // joking

function test(regex) {

    for (var i = 0; i < regex.lenght; i++) {
        if (regex[i] == 'i') {

        }
    }

}
