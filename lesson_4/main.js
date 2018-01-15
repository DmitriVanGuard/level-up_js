/*let age = 16,
    height = 170,
    grade = 10;*/

let [age, , grade] = [16, 170, 10];

// console.log(age);
// console.log(grade);
// console.log(height);

let a = 13;
let b = 69;
[a, b] = [b, a];

// console.log(a, b);


const destructObj = { name: "Player1", x: 50, y: 44 };

const { name, x, y, z } = { name: "Player1", x: 50, y: 44 };

console.log(name, x, y, z);

let [age, height, ...rest] = [16, 170, 'asdf', 'zzz', '123', 123];
// console.log(age);
// console.log(height);
// console.log(rest);

const numbers = [1, 2, 3, 99];
const letters = ['a', 'b', 'c', 'z'];

const concat = [...numbers, ...letters];

console.log(concat);
