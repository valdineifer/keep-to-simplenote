const fs = require('fs')

module.exports = (fileName, jsonContent) => {
    const filePath = 'storage/' + fileName + '.json'

    fs.writeFile(filePath, JSON.stringify(jsonContent, null, 2), (err) => {
        if (err) {
            throw err
        }

        console.log('The JSON content has been converted successfully.')
    })

    return 0
}