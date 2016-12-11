const { compile, str, bool, array } = require('../index')

test('array', () => {
    expect(compile(array)).toEqual({
        type: 'array'
    })
})

test('uniq', () => {
    expect(compile(array.uniq)).toEqual({
        type: 'array',
        uniqueItems: true
    })
})

test('strict', () => {
    expect(compile(array.strict)).toEqual({
        type: 'array',
        additionalItems: false
    })
})

test('length', () => {
    expect(compile(array.len(1))).toEqual({
        type: 'array',
        maxItems: 1,
        minItems: 1
    })

    expect(compile(array.minlen(1))).toEqual({
        type: 'array',
        minItems: 1
    })

    expect(compile(array.maxlen(10))).toEqual({
        type: 'array',
        maxItems: 10
    })
})

test('items', () => {
    expect(compile(array.items(str))).toEqual({
        type: 'array',
        items: {
            type: 'string'
        }
    })

    expect(compile(array.items([str, bool, str.in('on', 'off')]))).toEqual({
        type: 'array',
        items: [
            {type: 'string'},
            {type: 'boolean'},
            {type: 'string', enum: ['on', 'off']}
        ]
    })
})
