// for of look for iterable values. does't work with objects. for of is better for arrays.
let student ={
    name:"Katherine",
    awesome: true,
    degree: "JavaScript",
    week:1,
};
for(item of student){
    console.log(item);
} //this one wont work becuase student is an object

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(cat of catArray){ //let is not nessasarry but can be used
    console.log(cat, 'says meow');
} 

let weather = ['cold', 'hot', 'windy', 'snow', 'rain'];
for(out of weather){
    console.log(out, 'the weather outside');
}

//function declaration
let x = addTwoNumbers (4, 3);
function addTwoNumbers(a, b){
    console.log(a + b);
    return a + b;
}


//function perameter
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let i;
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
  return sum;
}

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let i;
  let max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  } console.log(max)
  return max;
}

//arrow function
let addTwoNumbers = (x, y) => x + y
let exampleTwo = addTwoNumbers(2,1);
console.log(exampleTwo);

let addTwoNumbers = (a, b) => a * b
let numberTwo= addTwoNumbers (3,4);
console.log(numberTwo);

let sayHey = name => "Sup " + name;
let placeTwo = sayHey("Katherine"); 
console.log(placeTwo);

let sayName = name => "Sup" + name;
let secondPlace = sayName("Katherine");
console.log(secondPlace);


