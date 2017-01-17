console.log();
console.log("DOM...");
console.log();

body = document.body;

console.log(body);
console.log();
console.log(typeof body);

console.log(body.nodeType); // codigo tipo

/**
 * Code Type
    1   element
    2   attribute
    3   text
    8   comment
    9   document
 */

console.log(body.nodeName); // nome do tipo
console.log(document.images);

// percorre um array de objetos images do dom
for (var i = 0; i < document.images.length; i++) {
    console.log(document.images[i].src);
}

console.log();
console.log("document.getElementById() pega o elemento pelo id da tag");
console.log();

// pega o elemento pelo id
title = document.getElementById('title');
console.log(title);

console.log();
console.log("document.getElementsByTagName() pela o elemento pelo nome da tag");
console.log();

// pega o elemento pela tag
paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

//pega o elemento por posicao
swim = paragraphs[0];
console.log(swim);

bike = paragraphs[1];
console.log(bike);

run = paragraphs[2];
console.log(run);

console.log();
console.log("document.getElementsByClassName() pega o elemento pela classe ");
console.log();

console.log(document.getElementsByClassName('swim'));
console.log(document.getElementsByClassName('swim').length);
console.log(document.getElementsByClassName('bike'));
console.log(document.getElementsByClassName('bike').length);
console.log(document.getElementsByClassName('walk').length);

swim = document.getElementsByClassName('swim')[0];
console.log(swim);

console.log();
console.log("document.querySelectorAll() pega o elemento pela classe ");
console.log();

bike = document.querySelector('#bike'); // # representa um id
swim = document.querySelectorAll('.swim'); // . representa uma classe
run = document.querySelector('p:last-child'); // um elemnto

console.log(bike);
console.log(swim);
console.log(run);
