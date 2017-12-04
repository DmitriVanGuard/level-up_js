/* ---------------------------------------------------------------- */
// Пример 1
/*
	let jar = {
		numberOfCookies: 5,
		get cookies() {
			return this.numberOfCookies;
		},
		set cookies(value) {
			this.numberOfCookies = value;
		}
	};
*/

/* ---------------------------------------------------------------- */
// Пример 2

/*
	let jar = {
		numberOfCookies: 5,
		get cookies() {
			return this.numberOfCookies;
		},
		set cookies(value) {
			if (value >= 0 && value <= 5) {
				this.numberOfCookies = value;
			} else {
				console.error('Количество печенек должно быть от 0 до 5');
			}
		}
	};

	jar.cookies = 3;
	console.log(jar.cookies);
	jar.cookies = 10;
	console.log(jar.cookies);
*/

/* ---------------------------------------------------------------- */
// Пример 3
/* --- Object.defineProperty() ---*/

const person = {};

Object.defineProperty(person, 'age', {
	value: 10,
	writable: false,
	configurable: true,
	enumerable: false
});

Object.defineProperty(person, 'birthday', {
	get(){
		return '10.10.2010';
	},
	set(isBirthday){
		if(isBirthday === true){
			Object.defineProperty(this, 'age', {
				value: ++this.age
			});
		}
	}
});
Object.defineProperty(person, 'fullname', {
	value: 'John Cena',
	writable: false,
	configurable: false,
	enumerable: true
});

Object.defineProperty(person, 'hobby', {
	value: 'My little pony',
	writable: true,
	configurable: true,
	enumerable: true
});

// console.log(person.fullname);

person.fullname = 'Alexander';

/* ---------------------------------------------------------------- */
// Пример 4 - переделать в сценарии пример

const jar = {};

Object.defineProperty(jar, 'cookies', {
	get() {
		return this.value;
	},
	set(newValue) {
		if (newValue >= 0 && newValue <= 5) {
			this.value = newValue;
		} else {
			console.error('Количество печенек должно быть от 0 до 5');
		}
	},
	enumerable: false,
	configurable: true
});

jar.cookies = 0;


const jar = {};

Object.defineProperties(jar, {
	"numberOfCookies": {
		value: 5,
		configurable: true
	},
	"cookies": {
		get(){
			return this.numberOfCookies;
		},
		set(newNumber){
			if (newNumber >= 0 && newNumber <= 5) {
				Object.defineProperty(this, "numberOfCookies", { value: newNumber });
			} else {
				console.error('Количество печенек должно быть от 0 до 5');
			}
		},
		enumerable: true
	}
});
