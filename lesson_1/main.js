// ES6
/*
	let
	const
*/

// Пример 1
/*
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}

	console.log('После цикла ->', i);
	*/

// Пример 1.2
/*
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}

	console.log('После цикла ->', i);
	*/

// Пример 2
/*
	// var i; --- hoisting

	console.log('После цикла ->', i);
	// i = 123; --- hoisting
	var i = 123;
	*/

// Пример 2.2
/*
	// let i = 123;
	console.log('После цикла ->', i);
	let i = 123;
	*/

// Пример 3
/*
	let example = 10;

	if (true) {
		let example = 5;
		console.log(example);
	}

	console.log(example);
*/

// Пример 3.2
/*
	let example = 10;

	if (true) {
		example = 3;
		console.log(example);
	}

	console.log(example);
*/

// Пример 4
/*
	let value = 5;
	let value = 999;
*/

// Пример 4.2
/*
	var value = 5;
	var value = 999;
	console.log(value);
*/

/*--- CONST ---*/

// Пример 5
/*
	const ONE = 1;
	ONE = 5;
*/

// Пример 6
const player = {
	name: 'Joe',
	x: 55,
	y: 69
};

const items = [0, 1, 55, 'year', 3];

console.log(player, items); // в конце 1

player.name = 'Bob';
player.z = 123;

items.push('new');

console.log(player, items); // в конце 1

items = []; // в конце 2

player = {
	// в конце 2
	name: 'Newbie',
	x: 13,
	y: 37
};

