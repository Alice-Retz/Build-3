const fs = require("fs");
const pool = require("../utils/pool");
const Car = require("./car");

describe("Car model", () => {
	beforeEach(() => {
		return pool.query(
			fs.readFileSync(__dirname + "/../../sql/setup.sql", "utf-8")
		);
	});

	impa = { make: "Chevy", model: "Spark", year: 2017 };

	it("creates a car", async () => {
		const car = await Car.insert(impa);

		expect(car).toEqual({...impa, id: '1'});
	});

	afterAll(() => {
		return pool.end();
	});
});
