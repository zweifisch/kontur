const { compile, nil, bool, number } = require('../index')

test('multiple type', () => {
    expect(compile(nil.bool)).toEqual({
        type: ['null', 'boolean']
    })

    expect(compile(bool.str.number)).toEqual({
        type: ['boolean', 'string', 'number']
    })
})

test('enum', () => {
    expect(compile(number.in(1,3,5))).toEqual({
        type: 'number',
        enum: [1, 3, 5]
    })
})

test('default', () => {
    expect(compile(bool.default(false))).toEqual({
        type: 'boolean',
        default: false
    })
})

test('title', () => {
    expect(compile(bool.title("Done").desc("Job Done"))).toEqual({
        type: 'boolean',
        title: 'Done',
        description: 'Job Done',
    })
})
