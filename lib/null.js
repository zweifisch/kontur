const Schema = require('./schema')

class nil extends Schema {

    constructor() {
        super()
        this.nil
    }

    static schema() {
        return {
            schema: {
                type: 'null'
            }
        }
    }
}

module.exports = nil
