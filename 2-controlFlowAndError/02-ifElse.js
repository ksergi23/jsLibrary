// else, if the statement is false do the other statement.
let weather =75;
if(weather <70){
    console.log ('wear a jacket');

} else{
    console.log ('no jacket necessary!');
}

let myName ="Katherine";
if (myName == "Katherine");{
console.log ('my name');} 


let myName ="Katherine";
if (myName == "Katherine");{
console.log ('Hello, my name is', name);} 


let name = 'Kat';

if('Katherine' === name) {
    console.log('Hello, my name is' , name);
} else { 
    console.log('Hello, is your name', name+ '?');
}

let name = 'Kat';

if('Kat' != name) {
    console.log('Hello, my name is' , name);
} else { 
    console.log('Hello, is your name', name+ '?');
}

let name = 'aUTuMN' //find first character
console.log(name[0])
if(name[0]== name [0].toUpperCase){ //[] indicate an index, grab characters in a string.
    console.log(name)
} else{
    console.log('Hey its not written correctly');
}

let name = 'aUTuMN' //check for uppercase
console.log(name[0].toUpperCase())
console.log(name.slice(0,1));

let name = 'AuTumn' //check for uppercase
if(name[0]== name [0].toUpperCase()){ 
    console.log(name)
} else{
    console.log('Hey its not written correctly');
}

let name = 'aUTuMN' //remove first character. [] position, starts at 0. () characters, starts at 1.
if(name[0]== name [0].toUpperCase()){ 
    console.log(name[0]);
} else{
    console.log(name.substr(1));
}

let name = 'aUTuMN' //change to lower case
if(name[0]== name [0].toUpperCase()){ 
    console.log(name[0]);
} else{
    console.log(name.substr(1).toLowerCase());
}

let name = 'aUTuMN' //change string to lowercase
if(name[0]== name [0].toUpperCase()){ 
    console.log(name[0] + name.substr(1).toLowerCase());
} else{
    console.log(name.substr(1).toLowerCase());
}


let name = 'aUTuMN' //Change first character to upper case and rest of characters to lower case.
if(name[0]== name [0].toUpperCase()){ 
    console.log(name[0] + name.substr(1).toLowerCase());
} else{
    console.log(name[0].toUpperCase() + name.substr(1).toLowerCase());
}

/**
 Else If
 */
/* 
Challenge:
Look up the format for an Else If statement

Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let age = 30; 

if(age >= 25){
    console.log('Yay! You can rent a car!');
} else if(age >= 21){
    console.log('Yay! You can drink!');
} else if(age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log("Sorry, you're too young to do anything");
}

let age = 10;
if(age >= 25){
    console.log ('Yay! You can rent a car!');
} else if (age >= 21) {
    console.log('Yay! You can drink!');
} else if (age >= 18){
    console.log ('Yay! you can vote!');
}else {
    console.log("Sorry, you're too young to do anything");
}


let age = 21;

let a = "you cant do anything!";
let b = "You can vote!";
let c = "You can Drink!";
let d = "You can rent a car!";

if(age <= 17){
   console.log(a);
}

else if(age >= 18 && age <= 21){
   console.log(b);
}
else if(age >= 21 && age <=25){
   console.log(b,c);
}
else if(age >=  25){
   console.log(b,c,d);
}

let age = 26;
let a = 'Yay! You can vote!';
let b = 'Yay! You can drink!';
let c = 'Yay! You can rent a car!';

if (age >= 18 && age <= 20) {
   console.log(a);
 } else if (age >= 21 && age <= 24) {
   console.log(a,b);
 } else if (age >= 25) {
   console.log(a,b,c);
 } else {
   console.log('Sorry, you are too young to do anything.');
 }



 /**
  Switch
  Switch statements helps
  */
 let friend= "Bob";

 switch (friend) {
     case "Autumn" : //case if switch is = to case then read console.log below it.
     console.log (" Hey Autumn, when are you going rock climbing?");
     break; // break is seperating statements
     case "Dave":
     console.log ("Hey Dave, how is Copper?");
     break;
     case "Alecx":
     console.log("Hey Alecx, when are we playing DnD?");
     break;
     default: // if none above are true then default.
     console.log (`I'm sorry, ${friend}, but do I know you?`); //use backticks for default cut let ( ${lethere})
 } // switch cases are for evaluating cases that are more elaborate.

/*
Challenge:
Using a switch case
Write a dessert variable;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

 let dessert= "brownie"; //uses default

 switch (dessert) {
     case "Pie": 
     console.log ("Pie, pie, me of my! ");
     break;
     case "cake":
     console.log ("Cake is great!");
     break;
     case "ice cream":
     console.log("I scream for ice cream");
     break;
     default:
     console.log (`Sorry, ${dessert}, is not on the menu`);
 }
 let dessert= "ice cream"; // uses the console.log for ice cream.

 switch (dessert) {
     case "Pie": 
     console.log ("Pie, pie, me of my! ");
     break;
     case "cake":
     console.log ("Cake is great!");
     break;
     case "ice cream":
     console.log("I scream for ice cream");
     break;
     default:
     console.log (`Not on the menu`);
 }

 let yep = -8;

 switch (true) {
     case (yep < 0 && yep > -10):
     console.log ('worked');
     break;
     case (yep >0):
     console.log ('worked');
     break;
     default:
     console.log (`didnt work`);
}


let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}