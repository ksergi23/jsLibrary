//good for debugging

let student = {
name: "Katherine", 
awesome: true, 
degree: "JavaScriptt", 
week: 1}
for(let item in student) { //item only exsist inside of the for in loop
    console.log(item) //this one will grab property
    console.log(student[item]) //this will grab object
}

//let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(let cat in catArray) {
    console.log(cat); //when run it pulling their index, i.e. tabby is the 1st index
}

 let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

 for(let cat in catArray) {
 console.log(catArray[cat]); //this will grab the value of the index i.e 1 = tabby
}

let studentName ='katHerIne';
let capName;
for(let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLocaleLowerCase();
    }
}
console.log(capName); 

let Name ='KaTheRine';
let capName;

for(let x in Name){
    if (x ==0){
        capName = Name[x].toUpperCase();
    } else{
        capName += Name[x].toLowerCase();
    }
}
console.log(capName);