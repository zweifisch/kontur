const { compile, str, array, object } = require('../index')

test('example', () => {
    expect(compile({
        assignment: {
            assignees: array.len(3).uniq.items(str.len(16)),
            assigner: object.strict.properties({
                id: str.len(16)
            }),
            assigned_at: str.datetime
        }
    })).toEqual({
        type: "object",
        properties: {
            assignment: {
                type: "object",
                properties: {
                    assigner: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                minLength: 16,
                                maxLength: 16
                            }
                        },
                        required: ["id"],
                        additionalProperties: false
                    },
                    assignees: {
                        type: "array",
                        maxItems: 3,
                        minItems: 3,
                        uniqueItems: true,
                        items: {
                            type: "string",
                            minLength: 16,
                            maxLength: 16
                        }
                    },
                    assigned_at: {
                        type: "string",
                        format: "date-time"
                    }
                },
                required: ["assignees", "assigner", "assigned_at"]
            }
        },
        required: ["assignment"]
    })
})
        
