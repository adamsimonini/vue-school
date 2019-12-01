import User from './user.js'

describe('User', () => { //simply used to group tests together
    test('Name returns full name', () => {
        const user = new User({firstname: 'Jane', lastname: 'Doe'})
        expect(user.name).toBe('Jane Doe')
    });
    test.skip('Firstname returns firstname', () => {
        const user = new User({firstname: 'Jane', lastname: 'Doe'})
        expect(user.firstname).toBe('Jane')
    });
});
