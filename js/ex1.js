//Complete the following functions
//Displays all body nodes
const bodyNodes = () => {
  document.body.childNodes.forEach( child => {
    console.log( child );
  });
};

bodyNodes();