/*
write a function localGreet that takes a locale as input, 
and returns a greeting
*/
function greet(code){
  
  switch (code) {
    case 'en' :
      return 'Hello';
    case 'af' :
      return 'Haai';
    case 'fr':
      return 'Salut';
    default :
      return 'not a valid language code.';
  }
}

function extractLanguage(string) {
  return string.split('_')[0];
}

function extractRegion(string) {
  return string.split('_')[1]
               .slice( 0, 2);
}

function localGreet(locale) {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);
  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy';
    
    default:
      return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

