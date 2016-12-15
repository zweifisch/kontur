const assert = require('assert')
const Schema = require('./schema')

class str extends Schema {

    constructor() {
        super()
        this.str
    }

    static schema() {
        return {
            schema: {
                type: "string"
            }
        }
    }

    static get email() {
        return new this().email
    }

    get email() {
        this.s.format = 'email'
        return this
    }

    static get datetime() {
        return new this().datetime
    }

    get datetime() {
        this.s.format = 'date-time'
        return this
    }

    static get ipv4() {
        return new this().ipv4
    }

    get ipv4() {
        this.s.format = 'ipv4'
        return this
    }

    static get ipv6() {
        return new this().ipv6
    }

    get ipv6() {
        this.s.format = 'ipv6'
        return this
    }

    static get uri() {
        return new this().uri
    }

    get uri() {
        this.s.format = 'uri'
        return this
    }

    static get uuid() {
        return new this().uuid
    }

    get uuid() {
        this.s.format = 'uuid'
        return this
    }

    static match(regexp) {
        return new this().match(regexp)
    }

    match(regexp) {
        assert('string' === typeof regexp || regexp && regexp.source,
               'Invalid regular expression passed to match()')
        this.s.pattern = regexp.source || regexp
        return this
    }

    static minlen(len) {
        return new this().minlen(len)
    }

    minlen(len) {
        assert('number' === typeof len, 'Invalid number passed to minlen()')
        this.s.minLength = len
        return this
    }

    static maxlen(len) {
        return new this().maxlen(len)
    }

    maxlen(len) {
        assert('number' === typeof len, 'Invalid number passed to maxlen()')
        this.s.maxLength = len
        return this
    }

    static len(len) {
        return new this().len(len)
    }

    len(len) {
        assert('number' === typeof len, 'Invalid number passed to len()')
        this.s.minLength = this.s.maxLength = len
        return this
    }

}

module.exports = str
