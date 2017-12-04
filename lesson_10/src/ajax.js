/*
function getLevels() {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', 'levels.json');

		xhr.onload = event => {
			if (xhr.status === 200) {
				const levels = JSON.parse(xhr.responseText);
				resolve(levels);
			}
		};

		xhr.onerror = () => {
			reject('Во время запроса что-то пошло не так');
		};

		xhr.send();
	});

	return promise;
}
*/

function getLevels() {
	return new Promise((resolve, reject) => {

		console.warn('Загружаются уровни...');

		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'levels.json');

		xhr.onload = () => {
			if (xhr.status === 200) {
				const levels = JSON.parse(xhr.responseText);
				resolve(levels);
			} else {
				reject('Во время запроса что-то пошло не так');
			}
		};

		xhr.onerror = () => {
			reject('Во время запроса что-то пошло не так');
		};

		xhr.send();

	});
}

export default getLevels;
