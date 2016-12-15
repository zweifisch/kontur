const object = require('./object')
const array = require('./array')

const compile = (schema, includeMeta=false) => {
    if ('function' !== typeof schema.schema) {
        if (Array.isArray(schema)) {
            schema = array.items(schema).len(schema.length)
        } else {
            schema = object.properties(schema)
        }
    }

    let result = schema.schema()

    if (result.schema.properties) {
        let requiredKeys = []
        let deps = {}
        for (let key of Object.keys(result.schema.properties)) {
            let { schema: propSchema, optional, dependencies } = compile(result.schema.properties[key], true)
            result.schema.properties[key] = propSchema
            if (!optional) requiredKeys.push(key)
            if (dependencies) deps[key] = dependencies
        }
        if (requiredKeys.length) result.schema.required = requiredKeys
        if (Object.keys(deps).length) result.schema.dependencies = deps
    } else if (result.schema.items) {
        if (Array.isArray(result.schema.items)) {
            result.schema.items = result.schema.items.map(x => compile(x))
        } else {
            result.schema.items = compile(result.schema.items)
        }
    }

    return includeMeta ? result : result.schema
}

module.exports = compile
