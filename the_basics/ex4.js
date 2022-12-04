// why does the following code log '510' instead of 15?
console.log('5' + 10);

/*
The above code logs '510' - a String - because the first value '5'
is a string so the + sign is interpreted as a concatenation operation 
NOT an arithmetic operator. JavaScript then coerces 10 - a Number - to
a string and concatenates the two values. '5' + '10' === '510'
*/

// explicitly coerce '5' to be a Number
console.log(Number('5') + 10);