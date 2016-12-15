const { compile, bool, } = require('../index')
const { isPrimitive } = require('./util')

test('object', () => {
    expect(compile({
        verified: bool
    })).toEqual({
        type: 'object',
        properties: {
            verified: {
                type: 'boolean'
            }
        },
        required: ['verified']
    })
})

test('tuple', () => {
    expect(compile([bool, bool])).toEqual({
        type: 'array',
        items: [
            { type: 'boolean' },
            { type: 'boolean' }
        ],
        maxItems: 2,
        minItems: 2
    })
})

test('isPrimitive', () => {
    expect(isPrimitive(1)).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive('')).toBe(true)
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive(/i/)).toBe(false)
    expect(isPrimitive([])).toBe(false)
})
