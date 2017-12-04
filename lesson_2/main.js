// Пример 1
/*
	const multiply = (a, b) => {
		return a * b;
	};
*/

// Пример 1.2
/*
	const multiply = (a, b) => a * b; // Arrow func

	const multiple = function(a, b) {
		// Classic func
		return a * b;
	};
*/

// Пример 2
const print = message => console.log(message);
// print('Hello world!');

// Пример 3
/*
	const Player = {
		nickname: 'Avacado',
		skills: ['a', 'b', 'c'],
		printSkills: function() {
			this.skills.forEach(function(skill) {
				print(`${this.nickname} знает ${skill}`);
			});
			//}, this); //second argument <- this
		}
	};

	Player.printSkills();
*/

// Пример 3.2
/*
	const Player = {
		nickname: 'Avacado',
		skills: ['a', 'b', 'c'],
		printSkills: function() {
			this.skills.forEach(skill => print(`${this.nickname} знает ${skill}`));
			//}, this); //second argument <- this
		}
	};

	Player.printSkills();
*/

// Пример 4
/*
	const createPlayer = (name = 'Player1', x = 0, y = 0) => console.log(name, x, y);

	createPlayer('Banan', 99);
	createPlayer('Lime', undefined, null);
*/

// Пример 5

function printArg(a, b, ...params) {
	// console.log(`Первый-> ${a}, второй-> ${b}, оставшиеся-> ${params}`);
	console.log(`Первый-> ${a}, второй-> ${b}, оставшиеся->`, params);
}

printArg('start', 'black', 5617, 13, '37');
