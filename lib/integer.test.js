const { compile, int } = require('../index')

test('int', () => {
    expect(compile(int)).toEqual({
        type: 'number',
        multipleOf: 1
    })
})

test('between', () => {
    expect(compile(int.between(1, 5))).toEqual({
        type: 'number',
        multipleOf: 1,
        minimum: 1,
        maximum: 5
    })
})
