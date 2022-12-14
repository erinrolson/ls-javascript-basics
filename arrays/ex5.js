function findIntegers(array){
  return array.filter(element =>{
     return Number.isInteger(element); // return values that evaluate to truthy
  });
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]