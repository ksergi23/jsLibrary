/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 
let i = true;
let j = false;
/*        (1)
1-Keyword for boolean - no quotation marks
let on = true;
console.log(on); // true
let off = false;
console.log(off); // false
 
/*

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty); // null

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined;// never do this
console.log(undef); // undefined

let grass;
console.log(grass); // undefined

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 
*/

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

let degrees=90;
console.log(degrees);

let precise=999999999999999;//15 9's
console.log(precise);

let rounded=9999999999999999;//16 9's. js is precise up to 15 numbers before its rounded.
console.log(rounded);

let notQuite= 0.2+0.1; //js will round decimals as well.
console.log(notQuite);

let a = '123'; //this is considered a string and not a number, because of the single quotes.

let b= Number(a); // this will change it to a number value.
console.log(b);


/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne= "double quotes";
let stringTwo= 'single quotes';

console.log(stringOne,stringTwo) // comma needed to seperate the two different variables.

let first = 1050 + 100; //these are numbers
let second ='1050' + '100'; // these are strings

console.log(first);
console.log(second);

let firstName="Katherine";
let lastName= "Sergi";
console.log(firstName + lastName);

let firstName="Katherine";
let lastName= "Sergi";
console.log(firstName +' '+ lastName);

let firstName="Katherine";
let lastName= "Sergi";
console.log(firstName,lastName);

/*
Objects
*************

*/


let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
  };
  
  console.log(car1); // { size: 'large', quantity: 4, now: true }
  console.log(typeof car1); // object
  
/*
Arrays
************
Arrays are containers that hold lists of items
*/
let list =  [  'item1',   'item2',    'item3', true];
 /*   (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

  let list =[ 'item1', 'item2', 'item3', true];

  let burritos = ['large', 4, true];
  console.log(burritos);
  console.log(typeof burritos); //array's are technically objects.

  /*Addition vs. Concatenation
  **************************
  When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
   when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
   -it smashes the values together without trying to synthesize the values
  */

   let x = 10;
   let y = 15;
   console.log(x+y);

   let third = 1050 + '500';
   console.log(third);

   console.log (typeof third);

   let firstName = 'Katherine';
   let lastName = 'Sergi';
   let houseNumber = 6259;
   let street = 'Eller Creek';
   let city = 'Fishers';
   let state = 'Indiana';
   let zipCode = 46038;

   let firstName = 'Autumn';
let lastName = 'Henderson';
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';
let zipcode = 46038;

   console.log(firstName, lastName, houseNumber, street, city, state, zipCode);
   
   console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipCode);

   console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipCode);


/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

let myName = "Katherine"
console.log (myName.length);

/*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*
*/

let myNameIs = "Katherine"
console.log(myNameIs.toLocaleUpperCase()); //methods need two () to run. this is avaliable for string not all data types can use this method.

let home = "My home is in Indianapolis"; 
console.log(home.includes('Indianapolis'))

let sent = 'This sentence will be split into individual parts ';
let words = sent.split (' ');
console.log(words);


