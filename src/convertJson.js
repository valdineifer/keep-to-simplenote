module.exports = (originalJson) => {
    let tags = []

    if (originalJson.labels && originalJson.labels.length !== 0) {
        originalJson.labels.forEach(label => {
            tags.push(label.name)
        })
    }

    return {
        id: originalJson.id,
        content: originalJson.textContent,
        creationDate: new Date(),
        lastModified: new Date(),
        tags,
    }
}