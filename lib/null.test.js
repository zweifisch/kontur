const { compile, nil } = require('../index')

test('null', () => {
    expect(compile(nil)).toEqual({
        type: 'null'
    })
})
