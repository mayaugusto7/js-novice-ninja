var name = "Heisenberg";
console.log(name);
console.log(name.length);

/**
 * Outra forma de acessar o tamanho da string
 * name['length'];
 */
console.log(name['length']);

/**
 * Todos os tipos primitivos js sao imutaveis
 */
console.log(name.length);
name.length = 7;
console.log(name.length);

/**
 * Metodos
 */
console.log(name.toUpperCase()); // maiusculas
console.log(name.toLowerCase()); // minusculas
console.log(name.charAt(1)); // caracter
console.log(name.indexOf("H")); // valor do index
console.log(name.indexOf("a")); // index nao existe - 1;
console.log(name.lastIndexOf("e")) // ultimo index 7
console.log("JavaScript".concat("Ninja")); // concatena string um parametro
console.log("Hello".concat(" ", "World", "!")); // concatena string tres parametros
console.log("Java" + "Script" + " " + "Ninja"); // simbolo de + concatena strings;
console.log("       Hello World     ".trim()); // elimina espacos em branco;
console.log("   \t\t JavaScript Ninja!  \r".trim()); // elimina espacos em branco scapes