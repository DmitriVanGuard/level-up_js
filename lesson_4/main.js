// Пример 1

// let age = 16, height = 170, grade = 10;

// let [age, height, grade] = [16, 170, 10];

/*
	console.log(age);
	console.log(heihgt);
	console.log(grade);
*/

/* ---------------------------------------------------------------- */

// Пример 2
/*
let x = 6, y = 10;

[x, y] = [y, x];
	console.log(x);
	console.log(y);
*/

/* ---------------------------------------------------------------- */

// Пример 3

// let [age, height, grade, ...rest] = [16, 170, 10, 'player', 'castle', 55];

// console.log(rest);

/* ---------------------------------------------------------------- */

// Пример 4

const numbers = [1, 5, 90, 233];
const letters = ['a', 'b', 'c', 'd'];

const concat = [...numbers, ...letters];
// console.log(concat);

/* ---------------------------------------------------------------- */

// Пример 5

let [name, lastname, age = 50] = ['John', 'Cena'];
// console.log(name, lastname, age);

/* ---------------------------------------------------------------- */

// Пример 6

let { name: nickname, x: playerX, y: playerY } = { name: 'Player1', x: 50, y: 44 };
// console.log(nickname, playerX, playerY);

/* ---------------------------------------------------------------- */

// Пример 7

const element = {
	x: 13,
	y: 37
};

let { x, y, z } = element;
console.log(x);
console.log(y);
console.log(z);
