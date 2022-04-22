console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Andrea";
let lastName = "Schwenk";
var myAge = 28;
// Exercise 2
let fullName = firstName + " "+ lastName;
let templateFullName = `${firstName} ${lastName}` ;
 console.log("fullName: "+ fullName);
 console.log("templateFullName: " + templateFullName);
// Exercise 3
let city = "Decatur";
let pasttime = "reading, watching movies, playing videogames...Fallout 3 FTW ";
let myStory = `\Hello! My name is ${fullName}. I 
live in ${city}. I enjoy ${pasttime}. `;
console.log(myStory);