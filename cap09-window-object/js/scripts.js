x = 6;
console.log("window x value: " + window.x);

//window.alert("hello");
window.console.log("hello");

//window.confirm("Do you wish continue?");
window.console.log("Do you wish continue?");

//window.prompt("Please enter your name?");
window.console.log("Please enter your name?");

console.log("Browser info...");
console.log(window.navigator.userAgent);
console.log(window.location.href);

//atribuindo
//console.log(window.location.href = "http://www.sitepoint.com/");
//tipo do protocolo
console.log(window.location.protocol);

//host
console.log(window.location.host);

//port
console.log(window.location.port);

//pathname
console.log(window.location.pathname);

//search
console.log(window.location.search);

//hash
console.log(window.location.hash);

//origin
console.log(window.location.origin);

//origin
//console.log(window.location.assign("http://www.sitepoint.com/"));

console.log("...");
console.log("History Browser...");
console.log("...");

//console.log(window.history.go(1));
//console.log(window.history.go(0));
//console.log(window.history.go(-1));

//popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');
//popup.close();
window.moveTo(0,0);
window.resizeTo(600,400);
console.log(window.screen.height);
console.log(window.screen.width);
console.log(window.screen.availHeight);
console.log(window.screen.availWidth);
console.log(window.screen.colorDepth);




