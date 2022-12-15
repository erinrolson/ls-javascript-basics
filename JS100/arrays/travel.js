/* Write a function that checks whether or not a particular 
destination is included within destinations, without using 
the built-in method Array.prototype.includes() */

function contains(string, array){
  let result = false;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] === string){
      result = true;
      break;
    }
  }
  return result;
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false