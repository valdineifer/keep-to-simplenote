const fs = require('fs')
const md5 = require('md5')

module.exports = (filePath) => {
    let jsonOriginalFile

    const buffer = fs.readFileSync(filePath)

    jsonOriginalFile = JSON.parse(buffer.toString())
    jsonOriginalFile.id = md5(buffer)

    return jsonOriginalFile
}