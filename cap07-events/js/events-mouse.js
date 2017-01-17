console.log("mouse events");

var click = document.getElementById('click');

click.addEventListener("mousedown", function(){
    console.log("down");
});

click.addEventListener("click", function(){
    console.log("click");
});

click.addEventListener("mouseup", function(){
    console.log("mouseup");
});

var dblclick = document.getElementById("dblclick");

dblclick.addEventListener("dblclick", highlight);

function highlight(event) {
    event.target.classList.toggle("highlight");
}

var mouse = document.getElementById("mouse");
mouse.addEventListener("mousedown", highlight);
mouse.addEventListener("mouseup", highlight);
mouse.addEventListener("mouseover", highlight);
mouse.addEventListener("mouseout", highlight);
mouse.addEventListener("mousemove", function() {
     console.log("You Moved!");
});