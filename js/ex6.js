const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const generateDictionary = () => {
  let content = document.querySelector( '#content' );
  let dictionary = document.createElement( 'dl' );
  dictionary.id = 'dictionary';
  for( word of words) {
    let term = document.createElement( 'dt' );
    let definition = document.createElement( 'dd' );
    term.innerText = word.term;
    definition.innerText = word.definition;
    dictionary.append( term );
    dictionary.append( definition );
  }
  content.append( dictionary );
};

generateDictionary();