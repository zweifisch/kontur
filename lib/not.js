const Schema = require('./schema')

class not extends Schema {

    schema() {
        let schema = super.schema()
        schema.schema = { not: schema.schema }
        return schema
    }

}

module.exports = not
