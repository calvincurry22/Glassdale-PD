// OfficerSelect component that renders a select HTML element
//  *   which lists all officers in the Glassdale PD API

import { useOfficers } from "./OfficerProvider.js"



// Get a reference to the DOM element where the <select> will be rendered

const contentTarget = document.querySelector(".filters__officer")

const OfficerSelect = () => {

    const officersArrayOfObjects = useOfficers()

    const render = (officerCollection) => {
        
        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect"> 
                <option value="0">Select an officer</option>
                 ${officerCollection.map(
                    officerObject => {
                        return `<option>${officerObject.name}</option>`
                    }  
                 )}
            </select>
        
        `

    }

    render(officersArrayOfObjects)

}



/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

const eventHub = document.querySelector(".container")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {

    if (changeEvent.target.id === "officerSelect") {
       
        const theOfficerThatWasChosen = changeEvent.target.value

        const officerChosenEvent = new CustomEvent("officerChosen", {
            detail: {
                chosenOfficer : theOfficerThatWasChosen
            }
        })
        eventHub.dispatchEvent(officerChosenEvent)
    }
    
})



export default OfficerSelect
