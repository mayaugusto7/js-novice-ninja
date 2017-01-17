console.log();
console.log("Update DOM CSS...");
console.log();

swim = document.getElementsByClassName("swim")[0];
bike = document.getElementsByClassName("bike");
run = document.getElementsByTagName("p")[2];

swim.style.border = "blue 2px solid";
bike[0].style.backgroundColor = "green";
run.style.display = "none";

//verificando propriedades dos elementos
styles = getComputedStyle(bike[0]);
console.log(styles);

//styles.getPropertyCSSValue('color').cssText;

swim[0].style.border("red 2px solid");
swim[0].classList.add("highlighted");