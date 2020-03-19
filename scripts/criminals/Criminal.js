const Criminal = (criminalObject) => {
    return `
    <section class="criminal--card">
            <h3>${criminalObject.name}</h3>
            <p>Age: ${criminalObject.age}</p>
            <p>Crime: ${criminalObject.conviction}</p>
            <p>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
            <p>Arresting Officer: ${criminalObject.arrestingOfficer}</p>
            <button class="dialogButton" id="associates--${criminalObject.id}">Show Associates</button>
    </section>
    `
}

export default Criminal