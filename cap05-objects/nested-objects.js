//Objetos aninhados...
console.log();
console.log("Nasted Objects...");
console.log();

jla = {
    superman: { realName: "Clarke Kent" },
    batman: { realName: "Bruce Wayne" },
    wonderWoman: { realName: "Diana Prince" },
    flash: { realName: "Barry Allen" },
    greenLantern: { realName: "Hal Jordan" },
    martianManhunter: { realName: "John Jones" }
}

console.log(jla);

console.log();
console.log("Nasted Objects Accsses Properties...");
console.log();

console.log(jla.wonderWoman.realName);
console.log(jla['flash']['realName']);
console.log(jla.wonderWoman['realName']);

console.log();
console.log("Objects como parametros...");
console.log();

function greet(options) {
    options = options || {};
    greeting = options.greeting || "Hello";
    name = options.name || "Anon";
    age = options.age || 18;
    return greeting + "! My name is " + name + " and I am " + age + " years old.";
}

console.log(greet({greeting: "Hi", age: "10", name:"Bart"}));
console.log(greet({name: "Lisa", age: 8}));

