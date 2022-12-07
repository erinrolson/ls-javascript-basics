//what is logged to the console?
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
/*
'Not Empty' is logged to the console.
There are 6 values in JavaScript that evaluate to falsy:
  - 0
  - null
  - false
  - undefined
  - ''
  - NaN
*/