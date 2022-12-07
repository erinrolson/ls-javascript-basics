// try to use reduce to solve!
function oddLengths(array){
  return array.reduce((accumulator, element)=>{
    let length = element.length;
    if(length % 2 !== 0){
      accumulator.push(length);
    } 
    return accumulator;
  }, []);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]