// use .reduce() array method to compute the sum of the squares of all the 
// numbers in an array

function sumOfSquares(arr){
  return arr.reduce((accumulator, element) => {
    return (element * element) + accumulator;
  }, 0);
  
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83