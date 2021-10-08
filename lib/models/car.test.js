const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./car');

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(
      fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8')
    );
  });

  impa = { make: 'Chevy', model: 'Spark', year: 2017 };
  ping = { make: 'Nissan', model: 'Sentra', year: 1998 };

  it('creates a car', async() => {
    const car = await Car.insert(impa);

    expect(car).toEqual({ ...impa, id: '1' });
  });

  it('finds a car by id', async() => {
    const car = await Car.insert(impa);
    const carId = await Car.findById(1);

    expect(carId).toEqual({ ...impa, id: '1' });
  });

  it('finds all cars', async() => {
    await Car.insert(impa);
    await Car.insert(ping);
    const allCars = await Car.findAll();

    expect(allCars).toEqual([{ ...impa, id: '1' }, { ...ping, id: '2' }]);
  });

  afterAll(() => {
    return pool.end();
  });
});
