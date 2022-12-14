/*
Write code that capitalizes the words in the string 'launch school tech & talk', 
so that you get the string 'Launch School Tech & Talk'.
*/
function capWords(string){
  let array = string.split(' '); //array of words
  for (let i = 0; i < array.length; i += 1){
    array[i] = array[i][0].toUpperCase() /* uppercase characer */ + array[i].slice(1) // original string w/o first char
  }
  return array.join(' ');
}

let string = 'launch school tech & talk';
console.log(capWords(string));
