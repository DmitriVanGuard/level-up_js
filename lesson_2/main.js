const multiply = (a, b) => a * b;

const result = multiply(3, 3);
// console.log(result);

const print = message => console.log(message);
// print("My name is Jeff");

/* ----- THIS ----- */

const player = {
  nickname: "Avacado",
  skills: ['a', 'b', 'c'],
  printSkills: function(){
    this.skills.forEach( skill => print(`${this.nickname} знает ${skill}`) );
  }
};

player.printSkills();



/* ----- ПАРАМЕТРЫ ПО УМОЛЧАНИЮ ----- */

const createPlayer = (name = 'Jeff', x = 22, y = 69, ...params) => {
  console.log(name, x, y);
  console.log(params);
};

createPlayer('Bob', 99, null, 42, 'alfa', 13, '37');
