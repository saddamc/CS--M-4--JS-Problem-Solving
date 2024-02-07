// basic function

// FUNCTION - 01

/***  keyword -> Name -> (parameter) -> {structure} ***/

// function printName(name){
//     console.log("My name is", name)
// }


/*** printName(argument) ***/

// printName("Mahedy")

// FUNCTION - 02

// function printDetails(name, age, address){
//     console.log(`My name is ${name}. My age is ${age}. I live in ${address}. `)
// }

// printDetails("mehedy", "26", "Rajshahi");

// FUNCTION - 03

// function add(x, y){
//     const total = x + y;
//     return total;
// }

// const z = add(40, 5);
// console.log(z);

/*** another way in one line ***/
// console.log(add(40, 5));

// FUNCTION - 04

function giveNumber(){
    console.log("inside function:", 5);
}
const x = giveNumber();
// console.log("outside function:", x);