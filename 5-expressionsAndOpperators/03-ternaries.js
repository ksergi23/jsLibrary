//a great way to write a single line for if/ if else statement

let w = 6;
//ternary
(w > 0) ? console.log ('yes') : console.log ('no');

//instead of:
if(w>0) {
    console.log('yes');
    } else {
        console.log ('no');
    }

    
    if (w == 0){
        console.log(' hey hey hey');
    } else if (w <0){
        console.log('nah nah nah, goodbye!');
    } else {
        console.log(' see ya later!');
    }
// ternary
(w ==0) ? console.log('hey hey hey') : (w <0) ? console.log ('nah nah nha, goodbye!') : console.log('see ya later!');

/**Challenge


Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let myAge = 10; //option z to wrap
(myAge >= 25) ? console.log ('yay! you can rent a car') : (myAge >= 21) ? console.log ('yay! you can drink') : (myAge >= 18) ? console.log ('yay! you can vote') :  console.log('sorry, youre too young to do anything');


(yes < 0 && yes < -10) ? console.log('worked') : (yes > 0) ? console.log ('worked!') : console.log ('didnt work');

let myAge = 10;

(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay, you can drink!') : (myAge >= 18) ? console.log('Yay, you can vote!') : console.log('Sorry, youre too you to do anything!')



var myAge = 10;


(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay! You can drink!') : (myAge >= 18 ) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");



let yes = -8;

switch (true) {
  case (yes < 0 && yes > -10): 
    console.log('worked');
    break;
  case (yes > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}


let yes = -8;
(yes < 0 && yes > -10) ? console.log('worked') : (yes > 0) ? console.log('worked!') : console.log('did\'t work');// escape character

