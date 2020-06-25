const firsName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design, web development, programming";

let val;

val = firsName + lastName;

// Concatenation
val = firsName + " " + lastName;

// Append

val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firsName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait";

// length
val = firsName.length;

// concat()
val = firsName.concat(" ",lastName);

// Change case
val = firsName.toUpperCase();
val = firsName.toLowerCase();

// W
val = firsName[0];

// indexOf()
val = firsName.indexOf('1'); // не работает!
val = firsName.lastIndexOf('1'); // не работает!

// chartAt()
val = firsName.charAt('2');

// Get last char
val = firsName.charAt(firsName.length - 1);

// substring()
// val = firstName.substring(0,4); // не работает!

// slice()
val = firsName.slice(0,4); 

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Brad", "Jack");

// includes()
val = str.includes("Hello");

console.log(val);