// add a property to the object
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet(string) {
    console.log('Hej, '  + string);
  }// add code here
};

jane.greet('Bobby'); // Hej, Bobby!