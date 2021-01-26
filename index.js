const fs = require('fs')
const path = require('path')
const convertKeepToSimplenote = require('./src/convertKeepToSimplenote')
const createFinalJsonFile = require('./src/createFinalJsonFile')

try {
    const fullPath = path.resolve(process.argv[2])
    const option = process.argv[3]
    const verbose = option === '-v' || option === '--verbose' ? true : false

    let finalJson = {
        activeNotes: [],
        trashedNotes: []
    }

    if (!fs.existsSync('storage/')) {
        fs.mkdirSync('storage')
    }
    
    if (fullPath.endsWith('.json')) {
        const dateMili = new Date().getTime()
        const converted = convertKeepToSimplenote(fullPath)

        if (converted[0] === true) {
            finalJson.trashedNotes.push(converted[1])
        } else {
            finalJson.activeNotes.push(converted[1])
        }

        createFinalJsonFile(dateMili, finalJson)
    } else {
        const dirItems = fs.readdirSync(fullPath)
        const dateMili = new Date().getTime()


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