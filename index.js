const str = require('./lib/string')
const number = require('./lib/number')
const int = require('./lib/integer')
const object = require('./lib/object')
const array = require('./lib/array')
const nil = require('./lib/null')
const bool = require('./lib/bool')
const not = require('./lib/not')
const { any, all, one } = require('./lib/misc')

const compile = (schema) => {
    if ('function' === typeof schema.schema) {
        return schema.schema().schema
    } else if (Array.isArray(schema)) {
        return array.items(schema).schema().schema
    } else {
        return object.properties(schema).schema().schema
    }
}

module.exports = {
    nil,
    bool,
    str,
    number,
    int,
    array,
    object,
    any,
    all,
    one,
    not,
    compile
}
