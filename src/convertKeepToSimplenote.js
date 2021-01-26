const fs = require('fs')
const convertJson = require('./convertJson')
const readFile = require('./readFile')

module.exports = (path, verbose = false) => {
    if (verbose) console.log(path)

    if(fs.existsSync(path)) {
        const originalJson = readFile(path)

        return [
            originalJson.isTrashed,
            convertJson(originalJson)
        ]
    } else {
        throw 'The file does not exist'
    }
}