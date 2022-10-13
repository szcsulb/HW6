//Complete code for the following function
//Display text for 400 level courses
const theColor = 'highlighted';
const colorize = () => {
  let pg = document.querySelectorAll( 'p' );
  console.log( pg );
  for( p of pg ) {
    addColor( p, theColor );
  }
}

const addColor = ( p, color ) => {
  p.classList.add( color );
}

colorize();