const fs = require('fs')
const path = require('path')
const convertJson = require('./src/convertJson')
const createFinalJsonFile = require('./src/createFinalJsonFile')
const readFile = require('./src/readFile')

const originalFilePath = path.resolve(process.argv[2])

try {
    if(fs.existsSync(originalFilePath)) {
        const originalJson = readFile(originalFilePath)

        console.log(originalJson)

        const fileName = originalJson.title
        const finalJson = convertJson(originalJson)

        return createFinalJsonFile(fileName, finalJson)
    } else {
        throw 'The file does not exist'
    }
} catch (err) {
    console.error(err)
}