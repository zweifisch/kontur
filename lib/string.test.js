const { compile, str } = require('../index')

test('str', () => {
    expect(compile(str)).toEqual({
        type: 'string'
    })
})

test('length', () => {
    expect(compile(str.maxlen(10).minlen(1))).toEqual({
        type: 'string',
        maxLength: 10,
        minLength: 1
    })

    expect(compile(str.minlen(1))).toEqual({
        type: 'string',
        minLength: 1
    })

    expect(compile(str.maxlen(10))).toEqual({
        type: 'string',
        maxLength: 10
    })

    expect(compile(str.len(10))).toEqual({
        type: 'string',
        maxLength: 10,
        minLength: 10
    })

})

test('pattern', () => {
    expect(compile(str.match(/^\d+$/))).toEqual({
        type: 'string',
        pattern: '^\\d+$'
    })

    expect(compile(str.match("[a-z]"))).toEqual({
        type: 'string',
        pattern: '[a-z]'
    })
})

test('format', () => {
    expect(compile(str.email)).toEqual({
        type: 'string',
        format: 'email'
    })
})
