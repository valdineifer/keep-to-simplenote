module.exports = (originalJson) => {
    let tags = []
    let listContent = ''

    if (Array.isArray(originalJson.listContent) && originalJson.listContent.length !== 0) {
        originalJson.listContent.forEach(li => { listContent += '\r\n- [' + ((li.isChecked == true) ? 'x' : ' ') + '] ' + li.text })
    }

    if (Array.isArray(originalJson.labels) && originalJson.labels.length !== 0) {
        originalJson.labels.forEach(label => {
            tags.push(label.name)
        })
    }

    return {
        id: originalJson.id,
        content: originalJson.title + (originalJson.textContent ? '\r\n\r\n' + originalJson.textContent : '') + listContent, // creation date not available, using modified time for both
        creationDate: new Date(parseInt(originalJson.userEditedTimestampUsec) / 1000), 
        lastModified: new Date(parseInt(originalJson.userEditedTimestampUsec) / 1000),
        tags
    }
}