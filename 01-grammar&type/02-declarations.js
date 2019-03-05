// variables can only be letters, underscore, or $. and are case sensitive i.e. upper and lower case letters are diferent, and no spaces.
/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/
let a = 2;
let     b      =      1; 
/*(1)    (2)    (3)    (4)     
1- Keyword
2- Variable name 
3- Assignment Opperator
4- Variable value
*/
//var c = 2; // var is the old way of writing use let.

/******* 
 Declarations
 **********/
 /** It is simply the var x
 It is on the left side of the assignment operator (=)

 Initialization are the RIGHT SIDE of a variable
 It sets the value of the variable
 it incorporations the variable name (x), the assignment operator (=), and the value (10) =>
**********/

let x;
console.log('Delcaration:', x);

x=10;

console.log('Initialization', x);

x=33;
console.log('Initialization', x);

let today = "Great";
const elevenFifity= "Wonderful";
console.log (today, elevenFifity);

elevenFifity= "Super"; // const can only be one thing, this was already assigned to "wonderful". name variables relating to the code.
console.log(today, elevenFifity);