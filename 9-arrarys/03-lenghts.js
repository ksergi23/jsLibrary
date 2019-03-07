let long = [1,2,3,4,5,6,7,8,9,10]
console.log(long.length); //this property wont start at zero like the index does

let colors= ['blue','green','yellow', 'red','orange','purple'];
console.log(colors); //this will include brackets and all
console.log(colors.toString()); //this mashed them all together in a megastring. if you want to turn an array into a string this is how.

let colors= ['blue','green','yellow', 'red','orange','purple'];
console.log(colors); 
let newColors = colors.toString();
console.log(newColors[2]); //this will read index of 2 in the new megastring, so it reads u.

let colors= ['blue','green','yellow', 'red','orange','purple'];
console.log(colors); 
let newColors = colors.toString();
console.log(typeof newColors); //since its been converted to a string it will read string.

/**
 Challenge 
 First check if your are working with an arrar=y
 then flip the values within the array(what was in index 4 is now in 0, 3 to 1, etc)
 using a method only, print the values of the newly arranged array.
 */

console.log(arr instanceof Array);//check if it is an array
 let arr =[1,2,3,4,5]
 arr.reverse(); 
 console.log( arr);

 let arr =[1,2,3,4,5]
 if (arr instanceof Array == true); {
     let reArr= arr.reverse()
     reArr.forEach(a => console.log(a))
 }
 