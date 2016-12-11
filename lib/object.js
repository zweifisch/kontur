const assert = require('assert')
const Schema = require('./schema')

class object extends Schema {

    constructor() {
        super()
        this.object
    }

    static schema() {
        return {
            schema: {
                type: "object"
            }
        }
    }

    static minsize(size) {
        return new this().minsize(size)
    }

    minsize(size) {
        assert('number' === typeof size, 'Invalid number passed to minsize()')
        this.s.minProperties = size
        return this
    }

    static maxsize(size) {
        return new this().maxsize(size)
    }

    maxsize(size) {
        assert('number' === typeof size, 'Invalid number passed to maxsize()')
        this.s.maxProperties = size
        return this
    }

    static size(size) {
        return new this().size(size)
    }

    size(size) {
        assert('number' === typeof size, 'Invalid number passed to size()')
        this.s.minProperties = size
        this.s.maxProperties = size
        return this
    }

    static get strict() {
        return new this().strict
    }

    get strict() {
        this.s.additionalProperties = false
        return this
    }

    static properties(properties) {
        return new this().properties(properties)
    }

    properties(properties) {
        let requiredKeys = []
        let deps = {}
        this.s.properties = {}
        for (let key of Object.keys(properties)) {
            let { schema, optional, dependencies } = properties[key].schema()
            this.s.properties[key] = schema
            if (!optional) requiredKeys.push(key)
            if (dependencies) deps[key] = dependencies
        }
        if (requiredKeys.length) this.s.required = requiredKeys
        if (Object.keys(deps).length) this.s.dependencies = deps
        return this
    }

}

module.exports = object
