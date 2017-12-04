// Пример 1

/*
	function Animal() {
		this.eyes = 2;
		this.legs = 4;
	}

	const bird = new Animal();
	const cat = new Animal()

	bird.legs = 2;

	console.log(bird.legs);
	console.log(cat.legs);

	// After

	Animal.prototype.speak = () => console.log('Tweet');

	bird.speak();
*/

/* ---------------------------------------------------------------- */
// Пример 2

/*
	class Animal {
		constructor() {
			this.eyes = 2;
			this.legs = 4;
			this.sound = 'Huh?';
		}

		speak() {
			console.log(this.sound);
		}
	}

	const cat = new Animal();

	cat.sound = 'Meow';
	cat.speak();
*/

/* ---------------------------------------------------------------- */
// Пример 3

/*
	class Animal {
		constructor(config) {
			this.eyes = 2;
			this.legs = 4;
			this.sound = 'Huh?';
			Object.assign(this, config);
		}

		speak() {
			console.log(this.sound);
		}
	}

	const cat = new Animal({ sound: 'Meow!', wool: 'grey' }); // ?????
	const mouse = new Animal({ sound: 'Psk', tail: 'curly' });

	cat.speak();

	console.log(cat);
	console.log(mouse);
*/

/* ---------------------------------------------------------------- */
// Пример 4

class Monster {
	constructor(health, scariness) {
		this.name = 'Monster';
		this.health = health;
		this.scariness = scariness;
	}

	speak() {
		console.info(`Я ${this.scariness} страшный ${this.name} с ${this.health} очками здоровья`);
	}

	attack(skill) {
		console.info(`${this.name} атакует использую ${skill}!`);
	}
}

class Dragon extends Monster {
	constructor(health, scariness, weapon) {
		super(health, scariness);
		this.name = 'Dragon';
		this.weapon = weapon;
	}

	breathFire() {
		super.attack(`огненный ${this.weapon}`);
	}
}

const pyro = new Dragon(100, 'asd', 'fireball');
pyro.speak();
pyro.breathFire();
