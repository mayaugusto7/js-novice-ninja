var form = document.forms.hero;

form.addEventListener("submit", makeHero, false);

function makeHero(event) {
    event.preventDefault();

    var hero = {}; //object literal vazio

    hero.name = form.name.value; // pega o valor do input name do form
    hero.realName = form.realName.value;
    hero.powers = []; // cria um array vazio

    for (i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    for (i = 0; i < form.type.length; i++) {
        if (form.type[i].checked) {
            hero.type = form.type[i].value;
            break;
        }
    }

    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero));
}

form.addEventListener("submit", validate, false);

function validate(event) {
    var firstLetter = form.name.value[0];
    if (firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        alert("Your name is not allowed to start with X!");
    }
}

form.name.addEventListener("blur", validateInline, false);

function validateInline(event) {
    // get the fist letter of the name input field
    var firstLetter = form.name.value[0];
    // get a reference to the label for the name input field
    var label = document.querySelector("label[for='name']");
    if (firstLetter.toUpperCase() === "X") {
        label.classList.add("error");
        label.textContent = "Your name is not allowed to start with X!";
    } else { // the error hasn't happened or has been fixed
        label.classList.remove("error");
        label.textContent = "Name:";
    }
}