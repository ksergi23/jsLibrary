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
     console.log ("Hey Dave, how is Cooper?");
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
     console.log (`Not on the menu`);
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

/**************************
WHITEBOARD 1 - FIZZ BUZZ (Conditionals Only)
**************************/
/*
Challenge:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/
let FB = 16
if (FB % 3 ==0 && FB % 5 == 0 ){
    console.log('fizzbuzz');
}else if (FB % 5 == 0){
    console.log('buzz');
}else if (FB % 3 ==0) {
    console.log('fizz');
} else {console.log('neither');
}




//if else

let FB = 6;

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('fizzbuzz')
} else if (FB % 5 == 0) {
    console.log('buzz')
} else if (FB % 3 == 0) {
    console.log('fizz')
}

//switch

let FB = 30;

switch(true) {
    case (FB % 3 == 0 && FB % 5 == 0):
    console.log('fizzbuzz')
    break;
    case (FB % 5 == 0):
    console.log('buzz')
    break;
    case (FB % 3 == 0):
    console.log('fizz')
    break;
}

//ternary

let FB = 15;

(FB % 3 == 0 && FB % 5 == 0) ? console.log('fizzbuzz') : (FB % 5 == 0) ? console.log('buzz') : (FB % 3 == 0) ? console.log('fizz') : FB;
