console.log();
console.log("Getter e Setter DOM Tree...");
console.log();

console.log();
console.log("Pegando elementos Getters DOM Tree...");
console.log();

//Pegando elementos do DOM

var swim = document.getElementsByClassName('swim');
var bike = document.getElementsByClassName('bike');
var run = document.getElementsByTagName('p')[4];

console.log(swim[0].getAttribute("class"));

for (var i = 0; i < bike.length; i++) {
    console.log(bike[i].getAttribute("class"));
}

var meta = document.getElementsByTagName("meta")[0];
console.log(meta);
console.log(meta.getAttribute("charset"));
console.log(swim[0].getAttribute("stroke"));

console.log();
console.log("Alterando elementos Setters DOM Tree...");
console.log();

console.log(swim[0].setAttribute("class", "swimming")); // atributo e valor
//console.log(swim[0].getAttribute("class"));

console.log(run.setAttribute("id", "run"));
console.log(run.getAttribute("id"));

console.log(bike[0].id);
console.log(swim.className);