const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  let scooter1;

  beforeEach(() => {
    scooter1 = {
      station: ['Deansgate', 'Salford', 'Didsbury'],
      user: null,
      charge: 100,
      broken: false
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
    expect(scooter1.station[0]).toBe('Deansgate');
  })
  test('Checks if scooter stations array has expected length', () => {
    expect(scooter1.station).toHaveLength(3);
  })
  test('Checks charge is initially set to 100%', () => {
    expect(scooter1.charge).toBe(100);
  })
  test('Checks scooter is not broken initially', () => {
    expect(scooter1.broken).toBe(false);
    expect(scooter1.broken).not.toBe(true);
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test('Checks that scooter has a rent method', () => {
    let scooter1 = new Scooter('Deansgate')
    expect(scooter1.rent()).toBeInstanceOf(Function);
  })

  //dock method
  xtest('Checks that scooter has a dock method', () => {
    let scooter2 = new Scooter()
    expect(scooter2.dock()).toBeInstanceOf(Function);
  })

  //requestRepair method
  xtest('Checks that scooter has a requestRepair method', () => {
    let scooter3 = new Scooter()
    expect(scooter3.requestRepair()).toBeInstanceOf(Function);
  })

  //charge method
  xtest('Checks that scooter has a charge method', () => {
    let scooter4 = new Scooter()
    expect(scooter4.charge()).toBeInstanceOf(Function);
  })

})
