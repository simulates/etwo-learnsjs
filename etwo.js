function sum(x, y) {
	return x + y;
} // This is a Sum it calls sum(x, y) and it returns the result

function sum (x, y) {
	return x+ y;
	console.log("Hello World"); // this wont return because we havent called for it
}

function multiply(a, b) {
    return a * b;
} // multiple example

"Strings contain speech marks";
'Another String' // You can create a string in JavaScript by using the double quotes (") or single quotes 

console.log("hello".length); // this will return the length of the text


let name = "hello ethan";
name.length; //11

"GREEN".toLowerCase(); // this another basic string to translate text to lowercase

"purple".toUpperCase(); // this translates the text to uppercase

function sum(a, b) { 
	console.log(a);
	console.log(a + b);
	return a + b;
} // t

//sample 
sum(2, 3); 

language[0]; // first char
language[1]; // second char
language[2]; // third char 

console.log(language[1]); // This will log the second char to the console 

language[ language.length - 2 ]; // this will print the second to last character in the string 

someString.substring(indexStart, indexEnd) // this will take different parts of the string of characters and log them to console

const language = "family"; 
language.substring(0, 3); // fami

language.substring(3); // ily

/**
 * @param {string} text
 */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    return text.substring(0,10);

}


"hi" + "world" // "hiworld"

let prefix = "Mrs.";
let name = "Sam";
let string = prefix + " " + name; // this will return Mrs. Sam 

let name = "Sam";
name += " Blue";
console.log(name); // "Sam Blue" , name = name + in a shorter way using the += operator:

f

unction concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial 
} // example with a string

Export function getDescription(text) {
	console.log(text); 
	return text.substring(0,10) + "..." // example 
}

//*one line string
`This is an example string`

let text = `strings also work 
line by
line`  // this cannot be done with double or single quotes


let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";


function getFullName(firstName, lastName) {
    let fullname = `${firstName} ${lastName}`;
    return fullname
}

// Sample usage - do not modify
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"
