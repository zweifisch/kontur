const { compile, number } = require('../index')

test('number', () => {
    expect(compile(number)).toEqual({
        type: 'number'
    })
})

test('range', () => {
    expect(compile(number.min(-1))).toEqual({
        type: 'number',
        minimum: -1,
    })

    expect(compile(number.max(1))).toEqual({
        type: 'number',
        maximum: 1,
    })

    expect(compile(number.between(1, 9))).toEqual({
        type: 'number',
        maximum: 9,
        minimum: 1
    })

    expect(compile(number.min(1).exclusive)).toEqual({
        type: 'number',
        minimum: 1,
        exclusiveMinimum: true
    })

    expect(compile(number.max(1).exclusive.min(0))).toEqual({
        type: 'number',
        minimum: 0,
        maximum: 1,
        exclusiveMaximum: true
    })

})
