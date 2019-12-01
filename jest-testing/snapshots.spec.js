const user = {
    name: 'Tony Tinkerton',
    age: 42,
    job: 'inventor'
}

test('user matches', () => {
    // const userString = "{'name' : 'Tony Tinkerston', 'age' : '42', 'job' : 'inventor'}"
    expect(user).toMatchSnapshot() //take a snapshot of a variable, and throw an error if it ever changes
    // to produce a new snapshot (and discard the old one), use the "npm test -- -u" flag when calling the test
})