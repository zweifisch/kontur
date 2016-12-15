const { compile, any, str, number, all, one, array, object } = require('../index')

test('enum', () => {
    expect(compile(any('female', 'male'))).toEqual({
        enum: ['female', 'male']
    })
})

test('anyOf', () => {
    expect(compile(any(str, number))).toEqual({
        anyOf: [
            { type: "string" },
            { type: "number" }
        ]
    })
})

test('allOf', () => {
    expect(compile(all(str.minlen(0), str.maxlen(10)))).toEqual({
        allOf: [
            { type: "string", minLength: 0 },
            { type: "string", maxLength: 10 }
        ]
    })
})

test('oneOf', () => {
    expect(compile(one(str.minlen(0), str.maxlen(10)))).toEqual({
        oneOf: [
            { type: "string", minLength: 0 },
            { type: "string", maxLength: 10 }
        ]
    })
})
