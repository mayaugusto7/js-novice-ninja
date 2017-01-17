//Parando Eventos Padrao do JS Object

var $broken = document.getElementById("broken");

$broken.addEventListener("click", function(event) {
    event.preventDefault(); // quebra o link e nao permite o acesso
    console.log("Broken Link!"); 
});


// Bubbling

console.log("Bubbling...");

var $ul = document.getElementById("list");
var $li = document.querySelector("#list li");

$ul.addEventListener("click", function(event) {
    console.log("Clicked on ul");
});

$li.addEventListener("click", function(event) {
    console.log("Clicked on li");
});

//Capturing

console.log("Capturing...");

$ul.addEventListener("click", function(event) {
     console.log("Clicked on ul");
}, true);

$li.addEventListener("click", function(event) {
     console.log("Clicked on li");
}, true);

// Stopping Bubbling Phase

$li.addEventListener("click", function(event) {
    console.log("clicked on li");
    event.stopPropagation(); // nao deixa o evento ser propagado
});

// Event Delegation
function highlight(event) {
    event.target.classList.toggle("highlight");
}

$ul.addEventListener("click", highlight);



