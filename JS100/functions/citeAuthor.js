/*Implement a function cite that takes two string arguments: 
the author of the quote and what they said. 
It then logs the quote to the console */

function cite(auth, quote){
  console.log(`${auth} said: ${quote}`); //template literal
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."