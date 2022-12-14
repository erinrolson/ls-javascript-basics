/*
Given strings like the following, how can you check whether they're equal 
irrespective of whether the characters they contain are upper or lower case?
*/

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

// use the return values of the string method .toUpperCase or .toLowerCase to compare
console.log(string1 === string2);
console.log(string1.toUpperCase() === string2.toUpperCase());