//Remove Events

var $once = document.getElementById('once');
$once.addEventListener("click", remove);

function remove(event) {
    console.log("Enjoy this while it lasts!");
    once.style.backgroundColor = "pink";
    once.removeEventListener("click", remove);
}