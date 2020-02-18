

const generateId = () => {
    return `${Date.now()}${Math.floor(Math.random() * Math.floor(1000))}`
}


export {
    generateId
}
