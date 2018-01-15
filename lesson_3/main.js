/* ----- for...of ----- */
const array = ['a', 'b', 'c', 'd'];

for( let element of array ){
  // console.log(element);
}

/* ----- some() ----- */
const instruments = ['гитара', 'флейта', 'гитара', 'тромбон', 'укулеле'];

instruments.some( instrument => {
  if( instrument === 'гитара' ){
    // console.log('Гитара найдена');
    // return true;
  }
} );

/*for(let i = 0; i < instruments.length; i++){
  if( instruments[i] === 'гитара' ){
    console.log('Гитара найдена');
    break;
  }
}*/

const result = numbers.some( number => number > 10 );
console.log(result);


/* ----- map() ----- */
const numbers = [8, 0, 99, 123, 7];
const newNumbers = numbers.map( number => number + 5 );

// console.log(numbers);
// console.log(newNumbers);

/* ----- filter() ----- */
const filteredNumbers = numbers.filter( number => number < 10 );
// console.log(filteredNumbers);


/* ----- reduce() ----- */

const total = numbers.reduce( (prevValue, currentElem) => {

  const table = { prevValue, currentElem, 'sum': prevValue + currentElem };
  console.table(table);

  return prevValue + currentElem;
}, 100 );

console.log(total);
