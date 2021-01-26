const fs = require('fs')
const path = require('path')
const convertKeepToSimplenote = require('./src/convertKeepToSimplenote')
const createFinalJsonFile = require('./src/createFinalJsonFile')

try {
    const fullPath = path.resolve(process.argv[2])
    const option = process.argv[3]
    const verbose = option === '-v' || option === '--verbose' ? true : false

    if (fullPath.endsWith('.json')) {
        convertKeepToSimplenote(fullPath)
    } else {
        const dirItems = fs.readdirSync(fullPath)
        const dateMili = new Date().getTime()

        let finalJson = {
            activeNotes: [],
            trashedNotes: []
        }

        dirItems.forEach(item => {
            if (item.endsWith('.json')) {
                const converted = convertKeepToSimplenote(path.resolve(fullPath + '/' + item), verbose)

                if (converted[0] === true) {
                    finalJson.trashedNotes.push(converted[1])
                } else {
                    finalJson.activeNotes.push(converted[1])
                }
            }
        })

        createFinalJsonFile(dateMili, finalJson)
    }
} catch (err) {
    console.error(err)
}