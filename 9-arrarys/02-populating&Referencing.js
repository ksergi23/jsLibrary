/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list =  [  'item1',   'item2',    'item3'];
console.log(typeof list); // this is reading what the datatype is, in this case an object

let list2 =['orange', 'banana', 'oreo'];
console.log(list2);

let list2 =['orange', 'banana', 'oreo'];
console.log(list2 [1]); //reads one specific item. this uses the index and [] with the number of the index you want to pull

let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha','Amira']];
console.log(students instanceof Array); // this will tell you if this is an array or not, because typeof will read object since arrarys are objects

let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha','Amira']];
console.log(students[6]); //this will pull the whole array 

let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha','Amira']];
console.log(students[6][1]); //this will pull from the second arrary. the first index is the postion the arrary starts and the second index is what were loking for in that index

let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha','Amira']];
console.log(students[6][0]); 


let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha',['Randy', 'Trevor'],'Amira']];
console.log(students[6][2][1]); 

let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha',['Randy', 'Trevor'],'Amira']];
let myFriend = students [6][2][1];
console.log (`Hello ${myFriend}, you look nice today`);
 

let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha',['Randy', 'Trevor'],'Amira']];
let myFriend = students [6][1];
console.log (`Hello ${myFriend}, you look nice today`);


let students =['Tony', 'Marshall', 'Rhys' ,'Ray', 23, true,['Ryan', 'Iesha',['Randy', 'Trevor'],'Amira']];
let myFriend = students [6][3];
console.log (`Hello ${myFriend}, you look nice today`);


let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
//for(let item in food){
//console.log(food[item]); //for in loop works like this
//}
let pizza ='pizza';
food.push(pizza); //this will push this to the end of the arrary
//console.log(food);

food.splice(1,1, 'bananas'); //remove set index and replace it with another. the first index is replaces and second index deletes and the last is what the repalcemetn is.
console.log(food);

let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
let pizza ='pizza';
food.push(pizza); 
food.splice(1,2, 'bananas'); //this will delete two indexes and add bananas
console.log(food); 

let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
let pizza ='pizza';
food.push(pizza); 
food.splice(1,1, 'bananas'); 
food.splice(2,0, 'Sweet Potato Pie');//this doesn't delete any index and adds sweet pottato pie
console.log(food); 

let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
let pizza ='pizza';
food.push(pizza); 
food.splice(4,1, 'ice cream');
console.log(food); 

let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
let pizza ='pizza';
food.push(pizza); 
food.splice(2,0, 'Sweet Potato Pie');
food.splice(4,0, 'ice cream');
food.pop(); //pop only removes the last item from an arrary
console.log(food);

let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
food.forEach(f => { //this is a loop and a function all in one.
    console.log(f);
})

let food =['Pecan pie', 'shrimp', 'quesadilla','cheese cake', 'hotdog'];
food.forEach((food, number) => { 
    console.log(food);
    console.log(number);
})

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.forEach((food,number, arr) => {
    console.log(number);
    console.log(food);
    console.log(arr)
})

/**
 Challenge MND W3Schools is a great source
 Create a list (with an arrary) of movies
 use .foreach() to list the movies
 add another movie at the end
 replace a movie with another
 */

 let movies =['Iron Man', 'Spider-Man', 'Thor', 'Captian America'];
 movies.push('Hulk'); 
 movies.splice(3,1, 'Avengers'); 
 console.log(movies);
 movies.forEach(m => {
console.log(m)
 })



