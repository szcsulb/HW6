//Complete code for the following function
//Display text for 400 level courses
const appendLink = () => {
  let links = document.querySelector( '#links' );
  let COB = generateListItem( 'cob' );
  let COBLink = generateLink( 'https://www.csulb.edu/college-of-business', 'College of Business' );
  COB.append( COBLink );
  links.firstElementChild.after( COB );
}

const generateListItem = function( htmlID ) {
  let listItem = document.createElement( 'li' );
  listItem.id = htmlID;
  return listItem;
}

const generateLink = function( href, htmlText ) {
  let link = document.createElement( 'a' );
  link.setAttribute( 'href', href );
  link.innerText = htmlText;
  return link;
}

appendLink();