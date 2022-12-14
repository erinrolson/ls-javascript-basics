function greet(code){
  
  switch (code) {
    case 'en' :
      console.log('Hello');
      break;
    case 'af' :
      console.log('Haai');
      break;
    case 'fr':
      console.log('Salut');
      break;
    default :
      console.log('not a valid language code.');
  }
  }
  
greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'