//quick and easy way to loop something.
// takes 3 expressions. a variable declaration, an expression to be evaluated before the iteration, and an expression to be evaluated at the end of the iteration

/************************
  FOR LOOPS
 *  **********************/


 //takes 3 expressions. a variable declaration. an expression to be evaluated before each iteration. and an expression to be evaluated at the end of each iteration.
 for (let i = 0; i < 10; i++) {
    console.log(i)
}

//Challenge: using a for loop, count to 20, by 2's
for(let i = 0; i <= 20; i += 2) {
   console.log(i)
}
// i = i + 2

//Challenge: using a for loop, count from 10 to 0, going down by 1's
for(let i = 10; i > 0; i--){
   console.log(i)
}

//Challenge: using a for loop, count from 0, going down by 2's to -24
for(let i = 0; i >= -24; i -= 2) {
   console.log(i)
}

// Challenge: using a for loop, go through a name and display each letter individually. Start by finding characters in a string

let myName = "David"

for (counter = 0; counter < myName.length; counter = counter + 1){
   console.log(myName.substring (counter, counter+1))
}

let name = 'Zach';

for(let i = 0; i < name.length; i++) {
   console.log(name[i])
}

/*
Challenge: 
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/

let sum = 0;

for (let i = 0; i <= 50; i++) {
   sum += i // sum = sum + i
}

console.log(sum);

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let n = 0; n <= 20; n+=2){
    console.log(n)
} //n = n +2

for (let i =10; i >0; i --){
    console.log(i)
}
for (let i =10; i >0; i -=2){
    console.log(i)
}
for (let i =0; i > -24; i -=2){
    console.log(i)
}

let name ='Katherine';

for(counter= 0; counter < name.lenght; counter = counter + 1){
    console.log(name.substring (counter, counter + 1))
}

let name = 'Katherine';
for(let i = 0; i < name.lenght; i++){
    console.log(name[i])
}

 let sum = 0;
 for(let i = 0; i <= 50;i++){
sum += i //sum = sum + i
 }
 console.log(sum);


 // Challenge: using a for loop, go through a name and display each letter individually. Start by finding characters in a string
 let name = 'Katherine';
 for (let i =0; i< name.lenght; i++){
     console.log(name[i])
 }