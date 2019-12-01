test.only('expectation', () => { //test.only makes the given test the only one in the file to execute
    expect(13).toBe(13)         //test.skip will
})


const result = {
    value: Date.now()
}

test('date', () => {
    expect(result).toEqual({
        value: expect.any(Number) //ensure a value type, as opposed to an actual value
    })
})

let number = 4;

test('is even', () => {
    expect(number % 2).toBe(0);
})