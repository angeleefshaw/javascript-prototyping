//currying in javascript makes function calls more modular. 
//With curried functions, calling the outer function returns the next 
//function in the chain and so on until the innermost 
//function is called, which then returns a value.

function makeGreeting(string) {
    return function getCurry(string2) {
        return  `I would like ${string} ${string2} curry.`
    }
}
    
let hello = makeGreeting('Spicy');
let helloWorld = hello('Pineapple');
console.log(helloWorld);