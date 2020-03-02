

const generateId = (seed = 'input') => {
    return `${seed}-${Date.now()}${Math.floor(Math.random() * Math.floor(1000))}`
}

export {
    generateId
}
