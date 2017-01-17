var form = document.forms.hero;

form.addEventListener("submit", makeHero, false);

function  makeHero(event) {
    event.preventDefault();
    var hero = {}; //object literal vazio
    hero.name = form.name.value; // pega o valor do input name do form
    alert(JSON.stringify(hero));
}