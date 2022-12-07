/* Use map and filter to first determine the lengths 
of all the elements in an array of string values, 
then discard the even values (keep the odd values).
*/
function oddLengths(array){
  let lenArray = array.map(value =>{
    return value.length
  });
  return lenArray.filter(number => {
    if (number % 2 !== 0) return number;
  });
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]