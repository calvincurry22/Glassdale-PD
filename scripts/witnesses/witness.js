

export const Witness = (witnessObject) => {
    return `
        <h2 id="${witnessObject.id}">Witness: ${witnessObject.name}</h2>
        <p>Statement: ${witnessObject.statements}</p>
     `
}