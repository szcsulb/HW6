const generateNumberTable = () => {
  let output = document.querySelector( '#output' );
  let table = document.createElement( 'table' );
  table.id = 'numTable';
  for( var i = 1; i <= 12; i++ ) {
    let row = document.createElement( 'tr' );
    let cell = document.createElement( 'td' );
    if( i % 4 === 0 ) cell.classList.add( 'divisible' );
    cell.innerText = i;
    row.append( cell );
    table.append( row );
  }
  output.append( table );
};

generateNumberTable();