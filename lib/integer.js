const number = require('./number')

class int extends number {

    constructor() {
        super()
        this._type = []
        this.int
    }

    static schema() {
        return {
            schema: {
                type: "integer"
            }
        }
    }

}

module.exports = int
