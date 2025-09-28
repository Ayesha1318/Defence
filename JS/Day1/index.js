// data type, variables

//let keyword
let age = 10;
// let age = 20; in let keyword we can not redeclare the same variable
age = 20
console.log(age);

let name = "Ayesha"
console.log(name);


//const keyword
const account = 1234556;
console.log(account)


//var keyword
//var b = 10;
// var b = 20; // in var keyword we can redeclare the same variable

//var does not respect the scope
if(true){
var b = 10;
}
console.log(b);

//var only respects functional scope
// function fun(){
//   var a = 50;
// }
// console.log(a);


//DATA TYPES --->
/*
1) PREMITIVE
  7 types--->
    i)  numbers
    ii) string
    iii) boolean
    iv) undefined
    v) null
    vi) bigint
    vii) symbol
2) NON- PREMITIVE
  3 types---->
    i) array
    ii) object
    iii) function
*/


// PREMITIVE DATA TYPE 
console.log("PREMITIVE DATA TYPE--->\n")
let a = 10;
console.log(a);
console.log(typeof a);

let c = 10.34;
console.log(c);
console.log(typeof c);

let str = "Ayesha Siddika"
console.log(str);
console.log(typeof str);

let login = true;
console.log(login);
console.log(typeof login);

let acc;
console.log(acc);
console.log(typeof acc);

let marks = null;
console.log(marks);
console.log(typeof marks); // type of null is object, it is a bug in JavaScript.

let big = 12345678901749371991n;
console.log(big);
console.log(typeof big);

let id1 = Symbol("id");
console.log(id1);
console.log(typeof id1);

let id2 = Symbol("id");
console.log(id1 == id2);

// NON PREMITIVE DATA TYPE 
console.log("NON PREMITIVE DATA TYPE--->\n")
// //in js type of non premitive data type is object
let array = [1,2,3,'Ayesha', 12.6,true];
console.log(array);
console.log(typeof array);

let user = {
  name : "Ayesha",
  id : 1318,
  age : 21,
  department : "Btech-CSE"
}

console.log(user);
console.log(typeof user);

let s = function add(){
  console.log("Hello world")
}
console.log(s);
s(); // here in this way we can call the function
console.log(typeof s);


/* Premitive are immutable data type... means we can not change the value... 
for example, let a = 12;
             a = 50;
             here new memory is created for a..


Non premitive are mumutable data type. means no copy is created, if we change any value it will reflect to the varible directly
*/

// EXAMPLE ---------->

let str1 = "Ayesha";
str1[0] = "S";
console.log(str1[0]);
console.log(str1);

let a1 = 23;
let b1 = a1;
b1 = 80;
console.log("a1:",a1);
console.log("b1:",b1);


let arr = [1,3,45,68,8];
arr.push(90);
console.log(arr);
arr[0] = 79;
console.log(arr);

let obj = {
  name : "ayesha"
}
console.log(obj);
obj.name ="AYESHA";
console.log(obj);

let obj1 = {
  age : 43
}
let obj2 = obj1;
obj2.age = 46;
console.log(obj1);
console.log(obj2);


