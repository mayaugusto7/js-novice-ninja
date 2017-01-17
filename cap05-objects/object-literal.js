console.log();
console.log("Objects Literals...");
console.log();

var superman = {
    name:"Superman",
    "real name": "Clark Kent",
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ["Batman", "Supergirl", "Superboy"],
    fly: function() {
        return "Up, up and away!";
    }
}

console.log(superman);

console.log();
console.log("Create Objects...");
console.log();

var spiderman = {}; // Essa forma e a preferida para criar objetos no js
var hook = new Object(); //Este metodo nao é recomendado

console.log();
console.log("Selected Properties Object...");
console.log();

console.log(superman.name);
console.log(superman['name']);
console.log(superman["real" + " " + "name"]);
console.log(superman.city); // undefined

console.log();
console.log("Call Methods Object...");
console.log();

console.log(superman.fly());
console.log(superman['fly']());

console.log();
console.log("Exists Properties & Methods Object...");
console.log();

console.log("city" in superman); //usar in para verificar se existe retorna true ou false
console.log(superman.city !== undefined); //false
console.log(superman.hasOwnProperty('city')); // verifica se a propriedade existe no objeto retorna true ou false;
console.log(superman.hasOwnProperty('name')); // verifica se a propriedade existe no objeto retorna true ou false;
console.log();

console.log();
console.log("Finding All Properties & Methods Object...");
console.log();

for (var key in superman) {
    console.log(key + ": "+ superman[key]);
}

console.log();

for (var key in superman) {
    if (superman.hasOwnProperty(key)) {
          console.log(key + ": "+ superman[key]);
    }
}

console.log();
console.log("Adding Properties & Methods Object...");
console.log();

superman.city = "Metropolis";
console.log(superman);

console.log();
console.log("Change Properties & Methods Object...");
console.log();

superman['real name'] = "Kal-El";
console.log(superman);

console.log();
console.log("Remove Properties & Methods Object...");
console.log();

delete superman.fly;
console.log(superman);
