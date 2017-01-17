/*function doSomething() {
    console.log("Something Happen!");
}*/

//Event Object

function doSomething(event) {
    // click
    console.log(event.type);
    // pega o elemento que foi clicado
    console.log(event.target);

    // coordenadas de um evento
    // pixels
    console.log("screen...");
    console.log(event.screenX);
    console.log(event.screenY);

    // pixels
    console.log("client...");
    console.log(event.clientX);
    console.log(event.clientY);
    
    // pixels
    console.log("page...");
    console.log(event.pageX);
    console.log(event.pageY);

    // buttom mouse pressed
    console.log(event.which);
}

addEventListener("click", doSomething);
