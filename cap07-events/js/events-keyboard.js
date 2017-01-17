
// evento global keyboard
addEventListener("keydown", highlight);

function highlight(event) {
    event.target.classList.toggle("highlight");
}

addEventListener("keyup", function stop(event) {
    var date = new Date;
    console.log("You stopped pressing the key on " + date);
});

addEventListener("keypress", function (event) {
    console.log("You pressed the " + String.fromCharCode(event.charCode) + " character");
});

//Modifier Keys
addEventListener("keydown", function(event) {
    if (event.keyCode == 32 &&  event.ctrlKey) {
        console.log("Action cancelled!");
    }
});

addEventListener("click", function(event) {
    if (event.shiftKey) {
        console.log("A Shifty Click!");
    }
});