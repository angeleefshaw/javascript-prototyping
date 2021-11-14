//Write a function that gives us a series of numbers in which each number is the sum of the two preceding numbers.


//starting with a function that returns the num'th number of the fib sequence 
function fibSequence(num) {
    if(num <= 2) {
        return 1
    } 
    return fibSequence(num - 1) + fibSequence(num - 2);
    
}

console.log(fibSequence(6));