
filterMorseDictionary = function(encodedLetter) {
    return MORSE_CODE[encodedLetter]
  }
  
  
  decodeMorse = function(morseCode){
    let completeString = [];  
    let encodedSentence = morseCode.split('   ');
    
    encodedSentence.forEach(word => {
      let encodedSingleLetters = word.split(' ');
      
      encodedSingleLetters.forEach(letter => {
        completeString.push(filterMorseDictionary(letter));
      })
    })
    
    console.log(completeString)
  }
  
  
  //take morseCode param - for each group of three spaces, add item to an array
  //for each item in newArray compare each groupd of characters against MORSE_CODE if it is divided by a space.
  //store each letter discovered in a new grouping somehow. 
  //eventually join all items into a string divided by spaces