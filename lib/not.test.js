const { compile, not } = require('../index')

test('not', () => {
    expect(compile(not.str)).toEqual({
        not: {
            type: 'string'
        }
    })
})
