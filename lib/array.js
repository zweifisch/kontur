const Schema = require('./schema')

class array extends Schema {

    constructor() {
        super()
        this.array
    }

    static schema() {
        return {
            schema: {
                type: "array"
            }
        }
    }

    static get strict() {
        return new this().strict
    }

    get strict() {
        this.s.additionalItems = false
        return this
    }

    static minlen(len) {
        return new this().minlen(len)
    }

    minlen(len) {
        this.s.minItems = len
        return this
    }

    static maxlen(len) {
        return new this().maxlen(len)
    }

    maxlen(len) {
        this.s.maxItems = len
        return this
    }

    static len(len) {
        return new this().len(len)
    }

    len(len) {
        this.s.minItems = this.s.maxItems = len
        return this
    }

    static items(items) {
        return new this().items(items)
    }

    items(items) {
        if (Array.isArray(items)) {
            this.s.items = items.map(item => {
                let { schema } = item.schema()
                return schema
            })
        } else {
            let { schema } = items.schema()
            this.s.items = schema
        }
        return this
    }

    static get uniq() {
        return new this().uniq
    }

    get uniq() {
        this.s.uniqueItems = true
        return this
    }

}

module.exports = array
