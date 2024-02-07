function add (x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        return "thik thak number de";
    }
    return x + y;
}
// console.log(add(4, 5));


/*** ANOTHER FUNCTION ***/ 

function details (info){
    if(typeof info !== "object"){
        return "input should be an object"
    }else if (!info.name || !info.age) {
        return "object must contain name and age property"
    }else if (typeof info.name !== "string" || typeof info.age !== "number"){
        return "name should be string, age should be a number"
    }else if (info.age <= 0){
        return "age should be a positive number"
    }
    
    return `My name is : ${info.name}, My age is ${info.age}`
}

console.log(details({ name: "mehedy", age:26 }))



// without validation

function printDetails(name, age, address){
    console.log(`My name is ${name}. My age is ${age}. I live in ${address}. `)
    }
    
    printDetails("mehedy", "26", "Rajshahi");