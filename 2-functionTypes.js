/*** Types of function
 * 1. no parameters, no return;
 * 2. not parameters, but return;
 * 3. parameters, but not return;
 * 4. parameters, return;
 ***/

/*** 1. no parameters, no return; ***/
function fun1 (){
    console.log("1. no parameters, no return;");
}

/*** 2. not parameters, but return; ***/
function fun2 (){
    return 5;
}

/*** 3. parameters, but not return; ***/
function fun3(name){
    console.log(name);
}

/*** 4. parameters, return; ***/
function fun4 (x, y){
    return x + y;
}

