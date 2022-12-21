//create an object from a nested array
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let newObj = Object.fromEntries(nestedArray);
console.log(newObj);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }