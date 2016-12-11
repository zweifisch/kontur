const Schema = require('./schema')

class bool extends Schema {

    constructor() {
        super()
        this.bool
    }

    static schema() {
        return {
            schema: {
                type: "boolean"
            }
        }
    }
}

module.exports = bool
