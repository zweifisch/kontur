const { compile, str, object, bool } = require('../index')

test('object', () => {
    expect(compile(object)).toEqual({
        type: 'object'
    })
})

test('required', () => {
    expect(compile(object.properties({
        id: str.optional
    }))).toEqual({
        properties: {
            id: {
                type: 'string'
            }
        },
        type: 'object'
    })

    expect(compile(object.properties({
        id: str,
        email: str.email.optional
    }))).toEqual({
        properties: {
            id: {
                type: 'string'
            },
            email: {
                type: 'string',
                format: 'email'
            }
        },
        required: ['id'],
        type: 'object'
    })
})

test('additionalProperties', () => {
    expect(compile(object.strict.properties({
        passed: bool
    }))).toEqual({
        properties: {
            passed: {
                type: 'boolean'
            }
        },
        type: 'object',
        required: ['passed'],
        additionalProperties: false
    })
})

test('size', () => {
    expect(compile(object.size(3))).toEqual({
        type: 'object',
        minProperties: 3,
        maxProperties: 3
    })

    expect(compile(object.minsize(3))).toEqual({
        type: 'object',
        minProperties: 3
    })

    expect(compile(object.maxsize(3))).toEqual({
        type: 'object',
        maxProperties: 3
    })
})

test('depends', () => {
    expect(compile(object.properties({
        name: str.optional,
        password: str.optional.depends('name')
    }))).toEqual({
        type: 'object',
        properties: {
            name: {
                type: 'string'
            },
            password: {
                type: 'string'
            }
        },
        dependencies: {
            password: ['name']
        }
    })
})
