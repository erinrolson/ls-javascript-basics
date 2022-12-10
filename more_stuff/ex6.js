/*Write a function that searches an array of strings for every 
element that matches the regular expression given by its argument. 
The function should return all matching elements in an array.
*/
function allMatches(array, regex){
  let newArr = [];
  array.forEach(ele => {
    if (regex.test(ele)){
      newArr.push(ele);
    }
  });
  return newArr;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']