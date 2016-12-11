const { compile, bool } = require('../index')

test('bool', () => {
    expect(compile(bool)).toEqual({
        type: 'boolean'
    })
})
