let levels;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'levels.json');

xhr.onload = event => {
	if (xhr.status === 200) {
		// console.info(xhr.responseText);
		levels = JSON.parse(xhr.responseText);
		// console.info(levels);
	}
};

xhr.send();
// console.info(levels);

/* ---------------------------------------------------------------- */
// LocalStorage

/*
	localStorage.setItem('currentLevel', 'tavern');

	const currentLevel = localStorage.getItem('currentLevel');
	console.info(currentLevel);
	// localStorage.removeItem('keyName'); - in the dev console
*/

/* ---------------------------------------------------------------- */

const player = {
	nickname: 'Anaconda',
	level: 'tavern',
	health: 90,
	inventory: ['knife', 'shield']
};

// localStorage.setItem('playerSave', player); // show in dev tools saved result [object Object]

const playerSave = JSON.stringify(player);
console.log(playerSave);

localStorage.setItem('playerSave', playerSave); // show in dev tools

/*
const loadedSaveJSON = localStorage.getItem('playerSave');

const loadedSave = JSON.parse(loadedSaveJSON);
console.log(loadedSave);
*/
