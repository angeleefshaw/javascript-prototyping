//Write a function that reverses a words order if the word length is over 4 letters
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  spinWords("Testing Code to see which words are reversed.")



//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum 
//of the integers to the left of N is equal to the sum of the integers to the right of N. 
//If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  const length = arr.length;
  const startPos = arr[1];
  
  //console.log(length, startPos)
  
  for(let i = 1; i <= length; i++) {
    let arrLeft = arr.splice(0, i)
   // let arrRight = arr.splice(arr[i], length)
    
    console.log(arrLeft)
  }
}

//start from the 1st index and work up.
//split the array at the index
//add the left side values and the right side values
//are these the same? 
// -> yes- return and break
// -> no- keep going

//for(let i = arr[1]; i <= arr.length; i++) 
// split the arr at the [i] index and add the left and right sides
// let arrLeft = arr.splice(0, arr[i])
// let arrRight = arr.splace(arr[i], (arr.length+1))
//are the L and R the same? 