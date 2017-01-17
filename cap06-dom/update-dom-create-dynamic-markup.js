console.log();
console.log("Update DOM e Create Dynamic Markups...");
console.log();

swim = document.getElementsByClassName('swim')[0];
bike = document.getElementsByClassName('bike')[1];
run = document.getElementsByTagName('p')[2];
var sports = document.getElementById('sports');

//criando um novo elemento no DOM
var newPara = document.createElement('p');

//criando o conteudo no elemento
var text = document.createTextNode('Transition 1');

//adicionando o texto no paragrapho
newPara.appendChild(text);
newPara.textContent = 'Transition 1';

//create new elment especificando a tag e texto
function createElement(tag, text) {
    el = document.createElement(tag);
    el.textContent = text;
    return el;
}

var anotherPara = createElement("p","Transition 2");

//add elementos na page
sports.appendChild(newPara);
sports.insertBefore(anotherPara, bike);
sports.appendChild(swim);
sports.insertBefore(swim, newPara);


//remove elementos da page
swim = sports.removeChild(swim);
sports.insertBefore(swim,newPara);

//replace elementos da page
h1 = document.getElementById("title");
oldText = h1.firstChild;
newText = document.createTextNode("Iron Man Triathlon");
h1.replaceChild(newText, oldText);

//innerHTML adicionano novos elementos
console.log(sports.innerHTML);
h1.innerHTML = "Biathlon";
sports.innerHTML = "<p>Skiing</p><p>Shooting</p>"

// live collections
console.log(sports.children.length);
console.log(sports.removeChild(swim));
console.log(sports.children.length);