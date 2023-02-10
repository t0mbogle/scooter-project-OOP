const User = require('../src/User')


describe('Test suite for User class', () => {
    let user1; // Outside beforeEach so it can be referenced in the tests

    beforeEach(() => {
        user1 = {
            username: "userName123",
            password: "password123",
            age: 30,
            loggedIn: false,
        };
      });

    test('Test to check the User has a username', () => {
        expect(user1.username).toBe("userName123");
    })
    test('Test to check the User has a password', () => {
        expect(user1.password).toBe("password123");
    })
    test('Test to check the User has an age', () => {
        expect(user1.age).toBe(30);
    })
    test('Checks whether loggedIn is initially set to false', () => {
        expect(user1.loggedIn).toBe(false);
        expect(user1.loggedIn).not.toBe(true);
    })
    xtest('Checks whether login() sets loggedIn to true', () => {
        // login in and check loggedIn is true
    })
    xtest('Checks whether logout() sets loggedIn to false', () => {
        // login in and check loggedIn is true
        // logout and check loggedIn is false
    })
   
});
