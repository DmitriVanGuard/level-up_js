/*
	import { hello } from './firstModule';
	// import { hello as helloString } from './firstModule';

	console.info(helloString);
	// console.info(helloString);
*/

/* ---------------------------------------------------------------- */
// Пример 2

/*
	import { name, lastname } from './secondModule';
	console.error(name, lastname);
*/

/* ---------------------------------------------------------------- */
// Пример 3

/*import Animal from './thirdModule';

const dog = new Animal({ sound: 'Whoof!' });
dog.speak();
*/


import * as extraModule from './extra';
console.log(extraModule);
extraModule.akino = false;
console.log(extraModule);
