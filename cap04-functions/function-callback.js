console.log();
console.log("Functions Callback...");
console.log();

function pizza(topping, callback) {
    console.log("This is a " + topping + " pizza");
    callback();
}

function cook() {
    console.log("The pizza is cooking");
}

function eat() {
    console.log("I've eaten the pizza!");
}

pizza("Ham & Pineapple", cook);
console.log();
pizza("Ham & Pineapple", eat);
console.log();
pizza("Ham & Pineapple", function () {
    console.log("The pizza has been delivered.");
});

console.log();
console.log("Sorting Arrays...");
console.log();

var a = [1, 3, 12, 5, 23, 18, 7].sort(); // nao ordena corretamente criar funcao para ordenacao
console.log(a);

function compareNumbers(a, b) {
    return a - b;
}

console.log();
console.log(a.sort(compareNumbers));

/** Java usa esse tipo de compacao
function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}  */


function square(x) {
    return x * x;
}

function mean(values, callback) {

    var total = 0;

    for (var i = 0, max = values.length; i < max; i++) {
        if (typeof callback === "function") {
            total += callback(values[i]);
        } else {
            total += values[i];
        }
    }

    return total / max;
}

console.log();
console.log(mean([2, 5, 7, 11, 4]));

console.log(typeof mean);
console.log();

console.log(mean([2, 5, 7, 11, 4], function (x) { return x * 2 }));
console.log();

//console.log(mean([2, 5, 7, 11, 4], square));

console.log();
console.log("Arrays Iterator...");
console.log();

var colors = ["Red", "Green", "Blue"];

for (var i = 0, max = colors.length; i < max; i++) {
    console.log("Color at position " + i + " is " + colors[i]);
}

console.log();
console.log("Usando forEach(callback)...");
console.log();

colors.forEach(function (color, index) {
    console.log("Color at position " + index + " is " + colors);
}, this);

console.log();
console.log("Usando map(callback)...");
console.log();

var num = [1, 2, 3];
//num.map(square); function not change values
num = num.map(square);
console.log(num);
console.log([1, 2, 3].map(square));
console.log();

colors = colors.map(function (color) {
    return "<p>" + color.toUpperCase() + "</p>";
});

console.log(colors);
console.log();

colors = colors.map(function (color, index, array) {
    return index + ": " + color + "(length " + array.length + ")";
});

console.log(colors);
console.log();

console.log();
console.log("Usando reduce(callback)...");
console.log();

var numbers = [1, 2, 3, 4, 5];

numbers = numbers.reduce(function (prev, current) {
    return prev + current;
});

console.log(numbers);
console.log();

/** 
numbers = numbers.reduce(function(prev, current) {
    return prev + current;
}, 10);

console.log(numbers);
console.log(); */

console.log();
console.log("Usando split()...");
sentence = "The quick brown fox jumped over the lazy dog"

words = sentence.split(" "); //separa espacos em branco e converte em array
console.log(words);

console.log();
console.log("Usando map(callback) & reduce(callback)...");
console.log();

var n = [1, 2, 3];

n = n.map(square).reduce(function (total, x) { return x + total; });

console.log(n);
console.log();

var sales = [100, 230, 55];

totalAfterTaxSales = sales.map(function (amount) {
    return amount * 1.15; // add 15% sales tax
}).reduce(function (prev, current) {
    return prev + current;
});

console.log(totalAfterTaxSales);

console.log();
console.log("Usando filter()...");
console.log();

var numbers2 = [2, 7, 6, 5, 11, 23, 12];

numbers2 = numbers2.filter(function(number) {
    return number%2 === 0;
});

console.log(numbers2);
