
const primitives = new Set(['string', 'boolean', 'number'])
const isPrimitive = x => x === null || primitives.has(typeof x)

exports.isPrimitive = isPrimitive
