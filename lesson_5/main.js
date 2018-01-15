/* ---------------------------------------------------------------- */
// Пример 5

const obj = {
	new(){
		return "сейчас";
	},
	old: function(){
		return "раньше";
	}
}

/* ---------------------------------------------------------------- */
// Пример 2
const jar = {
	cookies: 0
};

jar.cookies = 99;
jar.cookies = -55;

/* ---------------------------------------------------------------- */
// Пример 3

const jar = {
	numberOfCookies: 0,
	get cookies() {
		return this.numberOfCookies;
	},
	set cookies(value) {
		this.numberOfCookies = value;
	}
};


/* ---------------------------------------------------------------- */
// Пример 4

const human = {};

Object.defineProperty(human, 'age', {
	value: 10,
	writable: false,
	configurable: true,
	enumerable: false
});

console.log(human.age);
human.age = 90;
console.log(human.age);

/* ---------------------------------------------------------------- */
// Пример 5

const jar = {};

Object.defineProperties(jar, {
	"numberOfCookies": {
		value: 0,
		configurable: true
	},
	"cookies": {
		get(){
			return this.numberOfCookies;
		},
		set(value){
			if (value >= 0 && value <= 5) {
				// Object.defineProperty(this, "numberOfCookies", { value: value });
				Object.defineProperty(this, "numberOfCookies", { value });
			} else {
				console.error('Количество печенек должно быть от 0 до 5');
			}
		},
		enumerable: true
	}
});

console.log(jar.cookies);
jar.numberOfCookies = 4;
// jar.cookies = 4;
console.log(jar.cookies);