console.log();
console.log("Classes of an Element...");
console.log();

console.log("className Property...");

swim = document.getElementsByClassName('swim')[0];
run = document.getElementsByTagName('p')[2];

console.log(swim.className);
swim.setAttribute("class", "swimming");

console.log(swim.className);
console.log(swim.getAttribute("class"));

//change Property
swim.className = "swim";
console.log(swim.className);
console.log();

console.log("classList Property...");
console.log(run.classList.add('run'));
console.log(swim.classList.remove('swim'));
console.log(swim.classList.toggle('sport'));
console.log(swim.classList.toggle('sport'));
console.log(swim.classList.contains('sport'));
console.log(swim.classList.toggle('sport'));

