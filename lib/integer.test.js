const { compile, int } = require('../index')

test('int', () => {
    expect(compile(int)).toEqual({
        type: 'integer'
    })
})

test('between', () => {
    expect(compile(int.between(1, 5))).toEqual({
        type: 'integer',
        minimum: 1,
        maximum: 5
    })
})
