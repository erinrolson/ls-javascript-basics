// what will be logged to the console?
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { prefix: 'Pacific' }

// what will be logged to the console?
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { 'Indian': 'Pacific' } 
// because bracket notation evaluates expressions.