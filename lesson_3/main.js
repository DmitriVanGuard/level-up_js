// Пример 1
/*  --- for...of --- */

/*
	const array = ['a', 123, 'b', 555, 'c'];

	for (let element of array) {
		console.log(element);
	}
*/

/* ---------------------------------------------------------------- */

// Пример 2
/*  --- Object.keys() --- */

/*
	const Player = {
		nickname: 'Арнольд',
		health: 69,
		armor: 37,
		inventory: ['Фонарь', 'Нож', 'Веревка', 'Мыло']
	};

	console.log(Object.keys(Player));

	const playerProps = Object.keys(Player);
	for (let prop of playerProps) {
		let value = Player[prop];
		console.log(`Свойство: ${prop} | значение: ${value}`);
	}

	Object.keys(Player).forEach(key => console.log(`Свойство: ${key} | значение: ${Player[key]}`))

	Object.keys(Player).forEach(key => {
		let value = Player[key];
		console.log(`Свойство: ${key} | значение: ${value}`);
	});
*/

/* ---------------------------------------------------------------- */

// Пример 3
/*  --- some() --- */
/*
	const instruments = ['гитара', 'флейта', 'гитара', 'тромбон', 'укулеле'];

	instruments.some(instrument => {
		if (instrument === 'гитара') {
			console.log('Гитара найдена!');
			return true;
			// return true; Показать что будет если не возвращать true
		}
	});
*/

// Пример 3.2
/*
	const numbers = [8, 0, 99, 123, 7];

	const result = numbers.some(number => number > 10);
	console.log(result);
*/

/* ---------------------------------------------------------------- */

// Пример 4
/*  --- map() --- */
const numbers = [4, 9, 0, 100, 65, 2];

/*const newNumbers = numbers.map(number => number + 5);
console.log(numbers);
console.log(newNumbers);*/

/* ---------------------------------------------------------------- */

// Пример 6
/*  --- filter() --- */

const littleNumbers = numbers.filter(number => number < 10);
// console.log(littleNumbers);

/* ---------------------------------------------------------------- */

// Пример 7
/*  --- reduce() --- */

const total = numbers.reduce((prevValue, nextValue) => {
	// console.log(`prevValue = ${prevValue} | nextValue = ${nextValue}`);
	// console.log(`prevValue	+	nextValue	= next prevValue`);
	// console.log(`${prevValue}			+	${nextValue}			= ${prevValue + nextValue}`);
	const table = { prevValue, nextValue, "next prevValue": prevValue+nextValue};
	console.table(table)
	return prevValue + nextValue;
}, 100);

console.log(total);
