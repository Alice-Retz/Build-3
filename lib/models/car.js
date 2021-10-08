class Car {
	id;
	make;
	model;
	year;

	constructor(row) {
		this.id = row.id;
		this.make = row.make;
		this.model = row.model;
		this.year = row.year;
	}
}

module.exports = Car;
