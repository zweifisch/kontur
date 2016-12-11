const Schema = require('./schema')
const { isPrimitive } = require('./util')

const any = (...items) => {
    items = [].concat(...items)
    return new Schema(items.every(isPrimitive) ? { enum: items } : { anyOf: items.map(x => x.schema().schema) })
}

const all = (...items) => {
    items = [].concat(...items)
    return new Schema({ allOf: items.map(x => x.schema().schema) })
}

const one = (...items) => {
    items = [].concat(...items)
    return new Schema({ oneOf: items.map(x => x.schema().schema) })
}

module.exports = { any, all, one }
