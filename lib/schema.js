class Schema {

    constructor(initial = {}) {
        this.s = initial
        this._type = []
    }

    static get str() {
        return new this().str
    }

    get str() {
        this._type.push('string')
        return this
    }

    static get number() {
        return new this().number
    }

    get number() {
        this._type.push('number')
        return this
    }

    static get int() {
        return new this().int
    }

    get int() {
        this._type.push('integer')
        return this
    }

    static get nil() {
        return new this().nil
    }

    get nil() {
        this._type.push('null')
        return this
    }

    static get bool() {
        return new this().bool
    }

    get bool() {
        this._type.push('boolean')
        return this
    }

    static get object() {
        return new this().object
    }

    get object() {
        this._type.push('object')
        return this
    }

    static get array() {
        return new this().array
    }

    get array() {
        this._type.push('array')
        return this
    }

    static in(...items) {
        return new this().in(items)
    }

    in(...items) {
        this.s.enum = [].concat(...items)
        return this
    }

    static get optional() {
        return new this().optional
    }

    get optional() {
        this._optional = true
        return this
    }

    static depends(...deps) {
        return new this().depends(...deps)
    }

    depends(...deps) {
        this._dependencies = [].concat(...deps)
        return this
    }

    static title(title) {
        return new this().title(title)
    }

    title(title) {
        this.s.title = title
        return this
    }

    static desc(description) {
        return new this().desc(description)
    }

    static default(value) {
        return new this().default(value)
    }

    default(value) {
        this.s.default = value
        return this
    }

    desc(description) {
        this.s.description = description
        return this
    }

    schema() {
        if (this._type.length)
            this.s.type = this._type.length === 1 ? this._type[0] : this._type
        let result = {
            schema: this.s, 
            optional: this._optional,
            dependencies: this._dependencies
        }
        return result
    }

}

module.exports = Schema
