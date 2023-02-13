const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  let scooter1;

  beforeEach(() => {
    scooter1 = {
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
  test('Checks charge is initially set to 100%', () => {
    expect(scooter1.charge).toBe(100);
    expect(typeof scooter1.charge).toBe('number');
  })
  test('Checks scooter is not broken initially', () => {
    expect(scooter1.broken).toBe(false);
    expect(scooter1.broken).not.toBe(true);
  })

  test('Checks serial and nextSerial are numbers', () => {
    let newScooter = new Scooter();
    expect(newScooter.serial).toBe(0);
    expect(newScooter.nextSerial).toBe(1);
    expect(newScooter.serial + 1 === newScooter.nextSerial).toBe(true); 
    // serial is 1 behind nextSerial
  })

})

//Method tests
describe('scooter methods', () => {
  // tests here!     * The below methods are part of the ScooterApp?? *

  //rent method
  xtest('Checks that scooter has a rent method', () => {
    let scooter1 = new Scooter()
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
