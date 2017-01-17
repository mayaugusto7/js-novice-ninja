//Acessando o formulario

//var form = document.forms[0]; // pega o primeiro formulario ou
//var form2 = document.getElementsByTagName('form')[0]; // pelo nome da tag
//var form3 = document.forms.search; // pelo name do form
//var form4 = document.forms['search']; // pelo name do form

// pegando elementos do formulario
//var input = form.elements[0]; // pega o elemeto input
//var input2 = form.searchBox; // pega o elemento input pelo name
//var input3 = form['searchBox']; // pega o elemento input pelo name
//var button = form.elements[1]; // 

var form = document.forms.search;
var input = form.elements.searchBox; // pega o elemento pelo name
var button = form.elements[1];

//foca no campo
input.addEventListener("focus", function() {
    if (input.value === "Search Here") {
        input.value = "";
    }
}, false);

// foca o elemento antes --before
input.addEventListener("blur", function() {
    if (input.value === "") {
        input.value = "Search Here";
    }
}, false);

/*
input.addEventListener("change", function() {
    alert("changed");
}, false);*/

form.addEventListener("submit", search, false);

function search(event) {
    alert("You Searched for: " + input.value);
    event.preventDefault();
}

input.value = "Search Here";