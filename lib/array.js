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
        this.s.items = items
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
