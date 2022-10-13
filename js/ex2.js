//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
  let classes = document.getElementsByClassName( '400level' );
  for( cls of classes ) {
    console.log( cls.innerHTML );
  }
}

displayText400();