/*for(let i = 0; i < 10; i++){
  console.log(i);
}*/
// console.log('После цикла ->', i);

// let i = 123;
/*
let example = 10;

if (true){
  example = 5;
  console.log(example);
}

console.log(example);
*/

let value = 5;
let value = 999;


/*const ONE = 1;
ONE = 5;
*/

const player = {
  name: 'Joe',
  x: 55,
  y: 69
};

const items = [ 0, 1, 'asd', 'year' ];

console.log(player);
console.log(items);

player.name = 'Bob';
player.z = 123;

items[2] = 999;

console.log(player);
console.log(items);

player = 42;

/*  ШАБЛОННЫЕ СТРОКИ  */

const number = 5;
console.log( `Текст,
   переменная
        ->
    ${number}` );

console.log("\t Текст \n АБВ \t 000")
