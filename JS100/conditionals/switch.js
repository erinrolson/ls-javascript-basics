// what will the code log to the console?
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*
This program will log...
neigh
tweet tweet
*cricket*
to the console.

This is because there are no break statements, so when a match
to the case is found the code 'falls through' and executes all 
remaining case statements.
*/