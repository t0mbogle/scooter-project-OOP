const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  let scooter1;

  beforeEach(() => {
    scooter1 = {
      station: ['Deansgate', 'Salford', 'Didsbury'],
      user: null,
    };
  })

  test('Tests wether scooter is an object', () => {
    expect(scooter1).toBeInstanceOf(Object);
  })
  test('Checks if user is initially set to null', () => {
    expect(scooter1.user).toBe(null);
  })
  test('Checks if scooter has initial stations', () => {
    expect(scooter1.station).not.toBe(null);
  })
  test('Checks if scooter stations array has expected length', () => {
    expect(scooter1.station).toHaveLength(3);
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
