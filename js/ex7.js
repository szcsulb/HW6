let calculate = document.getElementById( 'calculate' );
var sumInts = function( int1, int2 ) {
  return parseInt( int1 ) + parseInt( int2 );
}
calculate.onclick = function ( e ) {
  e.preventDefault();
  let int1 = document.getElementById('int1').value;
  let int2 = document.getElementById('int2').value;
  let result;
  if( Number.isInteger( int1 * 1 ) && Number.isInteger( int2 * 1 ) )
    result = `${int1} + ${int2} = <span class="sum">${sumInts( int1, int2)}</span>`;
  else
    result = `<span class="error">Error!</span> You must enter integers. You entered "${int1}" and "${int2}". Try again.`;
  document.getElementById( 'content' ).innerHTML = result;
}