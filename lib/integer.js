const number = require('./number')

class int extends number {

    constructor() {
        super()
        this.int
    }

    static schema() {
        return {
            schema: {
                type: "number",
                multipleOf: 1
            }
        }
    }

}

module.exports = int
