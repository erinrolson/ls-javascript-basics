/*
We've been given an array of vocabulary words grouped into sub-arrays by meaning.
This is a two-dimensional array or a nested array. Write some code that iterates 
through the sub-arrays and logs each vocabulary word to the console.
*/
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let array = 0; array < vocabulary.length; array += 1){
  for( let string = 0; string < vocabulary[array].length; string += 1){
    console.log(vocabulary[array][string]);
  }
}

// Expected output:
// happy
// cheerful
// merry
// etc...