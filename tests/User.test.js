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
    test('Checks if error is thrown when given an incorrect password', () => {
        let user = new User('tom', 'myAwesomePassword', 20);
        expect(user.loggedIn).toBe(false);
        // incorrect - expect an exception to be thrown and caught
        expect(() => user.login('foobar')).toThrow(Error);
    })
    test('Checks if login() with correct password logs in the user', () => {
        let user2 = new User('tom', 'myAwesomePassword', 20);
        user2.login('myAwesomePassword');
        expect(user2.loggedIn).toBe(true);
    })
    test('Checks whether logout() sets loggedIn to false', () => {
        let pedro = new User('Pedro', 'pedro1234', 50);

        pedro.login('pedro1234');
        expect(pedro.loggedIn).toBe(true);
        pedro.logout();
        expect(pedro.loggedIn).toBe(false);
    })
   
});
