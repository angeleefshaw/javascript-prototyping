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
//console.log(helloWorld);

//rewritted in arrow syntax 
let curryOrder = string => string2 => `I would like ${string} ${string2} curry.`

const employees = [
    { age: 50, role: "team lead", department: "green", dateJoined: new Date('2021-01-20') },
    { age: 26, role: "dev", department: "green", dateJoined: new Date('2019-12-30') },
    { age: 34, role: "dev", department: "blue", dateJoined: new Date('2020-11-12') },
    { age: 34, role: "dev", department: "green", dateJoined: new Date('2020-08-21') },
    { age: 20, role: "intern", department: "green", dateJoined: new Date('2021-07-06') },
    { age: 53, role: "team lead", department: "red", dateJoined: new Date('2019-02-27') },
    { age: 44, role: "dev", department: "blue", dateJoined: new Date('2019-05-31') },
    { age: 45, role: "team lead", department: "blue", dateJoined: new Date('2018-03-10') }
]

//Task - filter employees by role/age/department 

// Since we’re handling each argument one off in single argument functions, 
// we can handle validating each argument as we go through the chain and hone 
// in on any argument errors before code proceeds or has a chance to return an empty array.

const setFilter = array => key => value => array.filter(x => x[key] === value);

const filterEmployees = setFilter(employees);
const filterEmployeesByRole = filterEmployees('role');
const filteredEmployeesByDev = filterEmployeesByRole('dev');
 
console.log(filteredEmployeesByDev); // Returns an array of devs 
