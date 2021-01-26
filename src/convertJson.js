module.exports = (originalJson) => {
    let tags = []

    if (Array.isArray(originalJson.labels) && originalJson.labels.length !== 0) {
        originalJson.labels.forEach(label => {
            tags.push(label.name)
        })
    }

    return {
        id: originalJson.id,
        content: originalJson.title + '\r\n\r\n' + originalJson.textContent,
        creationDate: new Date(),
        lastModified: new Date(),
        tags,
    }
}