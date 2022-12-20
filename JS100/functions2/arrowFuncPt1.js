/* refactor the code to use an arrow function

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

*/
const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun)

console.log(sentence('like', 'birds'));
// logs: I like birds.