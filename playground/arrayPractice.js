const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 7, 6, 3]

const arr2 = ["hello", "world", "for", "all"]

//find length of array 
let arrLength = arr.length;
console.log(`array length = ${arrLength}`);

//merge two or more arrays and return the newly formed array 
let concatArr = arr.concat(arr2);
console.log(`array concated = [${concatArr}]`);

//the entries() method returns an Array Iterator object of key/value pairs for each index in the array
let arrEntries = arr2.entries();
for(let i of arrEntries) {
    console.log(`array entries looks like [${i}]`);
}

//test every element in an array against a test case. Each element must pass for the test to be true
function isEven(num) {
    num % 2 == 0 ?  true : false 
}
console.log(arr.every(isEven));

//change elements in an array to a static value at a given index
let filledArr = arr2.fill("Filler Text", 2)
console.log(`I have added filler text to our array to give [${filledArr}]`)