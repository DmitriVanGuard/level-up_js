export default class {
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

// export default Animal;
