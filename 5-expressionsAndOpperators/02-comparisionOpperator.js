3 == 3
//Equal Opperator
3 == '3'; //this is also a true statement. it converts the string into a number.

//strictly equal. use 3 (===) equal signs. it stops the convertion, so the number won't equal the string.
3 === '3'; 
console.log(3 ==='3'); //false because one is a number and one is a string
console.log('3'==='3'); //true because they are both strings.

//not equal
'3'!= 3; //replace the = to !.
console.log('3'!= 3); //false

//strictly not equal added a =.
console.log ('3' !== 3); // true

//Greater than
3 > 2; // true

//Lesser than
2 < 3; // true

//Greater than or equal to
4 >= 2; // => this is used for another action >= is the correct way.

//lesser than or equal to
2 <= 3;

//And (two statements and both need to be true)
4 > 2 && 3 < 1;
console.log(4 > 2 && 3 < 1) // false, both statements aren't true so the statement is false.

//or ( one or both can be true)
4 > 2 || 3 < 1;
console.log(4 > 2 || 3 < 1) // one is true so the statement is true.