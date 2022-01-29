//During the compilation phase of code execution, the JavaScript engine allocates memory to save the 
//names of declared variables and functions by hoisting variable and function declarations 
//to the top of their current scope.

console.log(add(1,2)); 
// prints 3
 
//The code runs and returns 3 as expected because the function add() is hoisted
//during the compilation process. 
function add(a,b) {
    return a + b
}



//Hoisting with var, const, and let variables
//variables initialized with var are hoisted and set to undefined during compilation of code

console.log(myVarVariable); //prints undefined

var myVarVariable = 1; 

console.log(myVarVariable); // prints 1

//let and const variables are hoisted to the top of their parent block for scope, 
//so any type of block or function can be the parent scope for those variables.

//Calling a let or const variable before it is initialized will result in a reference error

console.log(myLetVariable); 
// triggers a ReferenceError
let myLetVariable = 1;



//conclusion: don't use var