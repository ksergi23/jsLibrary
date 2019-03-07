/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function
*/
function hi(){
    console.log('Hi!')
}
hi(); //invoking the function to run

//return gets something out of the function

function hi(){
    return 'Hi!';
}
hi(); //without the console.log we don't see the data


function hi(){
    return 'Hi!';
}
console.log(hi()); //console.log(hi()); = console.log('hi');

//Challenge: create a function that, when invoked, lists out the number 1-10
function numbers(){
    for ( let i =0; i <= 10; i++) {
        console.log(i);
    }
}
numbers();


function something(){
    for( let x =0; x <= 10; x++){
        console.log(x); }
    }
    something();
    something();

    /*let number = 20;
    function one2num(max){
        for (let i = 1; i <max +1; i++){
            console.log(i)
        }
    }
    one2num(number);  //this is using perameters*/

 //Challenge: given the arrary, create a function that list out the values individually

 
 function caller(){
    let arr = ['This', 'is', 'really', 'cool'];

    for( let x of arr) {
        console.log(x);
    }
 }

 caller();
    
/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/

function pet(animal){ //there can be any number of parameters
    console.log (`I have a ${animal} for a pet`); //if you pass the parameter it will still work just skip over the parameter

}
pet(`cat`);

function name(first,last){
    console.log(`Hello, my name is  ${first} ${last}`);
}

name(`Katherine`, `Sergi`);


function name(fullName){
    console.log(`Hello, my name is  ${fullName}`);
}

name(`Katherine Sergi`);

function name(fName, lName){
    let fullName = `${fName} ${lName}`
    console.log(`Hello, my name is ${fName} ${lName}` );
}

name('Katherine', 'Sergi');
name('Bill', 'Bob');

/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Concice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
} */

function coffee(){
    console.log('Coffee is good!');
} //hoisting works for this
coffee();

let coffee = () => { 
    console.log ('I like coffee');
}
coffee();

let cats = ( kitten, puppy) => {console.log(`I have ${kitten} cats and ${puppy} dogs`)}

cats(2,4);

//fat arrow hoisting doens't work. you don't need the function sign with fat arrow
cats(2,4);
let cats = ( kitten, puppy) => {console.log(`I have ${kitten} cats and ${puppy} dogs`)}

let apples = x => console.log (`There are ${x} apples.`) ; //conside has implied return. this one wont work if there are multiple lines
apples(10);

let apple =(x) => {console.log(`There are ${x} apples`)} //block will not have implied return if more than one line.
apple(10)

/******** 
 Returns
let hi = () => {
    reutrn 'hi;
    (1)
};

let newName = hi();
    (2)        (3)
    console.log(newName)
1- The keyword that brings our data out of our function
2- We need a new variable to holf the value of the return
3-When called, the function becomes the value of the return
 * ********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);

//Challaneg find the tip of a bill
function tipCalc(bill){
    let tip =(bill * 0.2);
    return tip.toFixed(2);
}
let totalTip = tipCalc(19.88);
console.log(totalTip);

//concise
let tipper = bill => (bill *0.2).toFixed(2)

let tips = tipper(19.88);
console.log(tips)

function tipCalc(bill){
    let tip=(bill * 0.3);
    return tip.toFixed(2);
}
let totalTip= tipCalc(23.97);
console.log(totalTip);

let tipper = bill => (bill *0.3).toFixed(2)
let tips = tipper(23.97)
console.log(tips)

function addSomeNumbers (a,b){
    console.log(a + b);
    return a + b;
}
addSomeNumbers( 5, 4);

function fullName (fName,lName) {
    console.log(`Hello, ${fName} ${lName}`)
}
fullName ('Katherine', 'Sergi')

function minutesLeft(minutes){
    console.log(`You have ${minutes} left in the show`)
}
minutesLeft('5 minutes')

let timer = function(seconds){
    if (seconds > 0){
        console.log(seconds)
        return timer(seconds-1)
    }else{
        return seconds
    }
}

timer(10);

let countdown = function(minutes){
    if(minutes > 0){
        console.log(minutes)
        return countdown(minutes - 1)
    } else{
        return minutes
    }
}
countdown(14);