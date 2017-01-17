console.log();
console.log("Navigatins DOM Tree...");
console.log();

var sports = document.getElementById('sports');
console.log(sports);

console.log(sports.childNodes); // nos filhos de sports
console.log(sports.children); // filhos
console.log(sports.children.length); //tamanho arvore de filhos p
console.log(sports.firstChild); // primeiro child
console.log(sports.lastChild); // ultimo child

/**
 * Parents
 */
bike = document.getElementsByClassName('bike');
swim = document.getElementsByClassName('swim');
console.log(bike[0].parentNode); // quem e o no pai
// no adjacente com 
console.log(bike[0].nextSibling); // elemento atual do no
console.log(bike[0].previousSibling); // proximo elemento do no

console.log();
console.log("Finding Node Value DOM...");
console.log();

swimTextNode = swim[0].firstChild;
console.log(swimTextNode);
console.log(swimTextNode.nodeValue); // conteudo do elemento
console.log(swim[0].textContent); // conteudo do elemento