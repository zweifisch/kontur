const Schema = require('./schema')

class number extends Schema {

    constructor() {
        super()
        this.number
        this._maximum = false
        this._minimum = false
    }

    static schema() {
        return {
            schema: {
                type: "number"
            }
        }
    }

    static multipleOf(num) {
        return new this().multipleOf(num)
    }

    multipleOf(num) {
        this.s.multipleOf = num
        return this
    }

    static min(min) {
        return new this().min(min)
    }

    min(min) {
        this.s.minimum = min
        this._minimum = true
        return this
    }

    static max(max) {
        return new this().max(max)
    }

    max(max) {
        this.s.maximum = max
        this._maximum = true
        return this
    }

    static between(min, max) {
        return new this().between(min, max)
    }

    between(min, max) {
        this.s.minimum = min
        this.s.maximum = max
        return this
    }

    get exclusive() {
        if (this._maximum) {
            this.s.exclusiveMaximum = true
            this._maximum = false
        } else if (this._minimum) {
            this.s.exclusiveMinimum = true
            this._minimum = false
        } else {
            throw Error("Unexpected exclusive")
        }
        return this
    }

    static get exclusive() {
        return new this().exclusive
    }

}

module.exports = number
