/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictionsArray = useConvictions()

    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsArray.map(crime => {
            return `<option>${crime.name}</option>`})
        }
            </select>`
    }
    
    render(convictionsArray)
}



/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")


// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const theCrimeThatWasChosen = changeEvent.target.value

        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                chosenCrime: theCrimeThatWasChosen
       
    }
})
 // Dispatch to event hub
 eventHub.dispatchEvent(crimeChosenEvent)
}
})




export default ConvictionSelect