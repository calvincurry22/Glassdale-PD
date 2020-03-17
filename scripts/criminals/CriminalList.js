import { useCriminals } from './CriminalDataProvider.js'
import { getCriminals } from './CriminalDataProvider.js'
import Criminal from './Criminal.js'
import { useOfficers } from '../officers/OfficerProvider.js'



/* In our function, we want the following actions to occur: 
  -select a target on the DOM for our criminal data to be sent to
  -convert our criminal data into readable html for the DOM */


  const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminal who committed the crime

    // Get the criminals
    const criminals = useCriminals()

    // Get the crime
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Look at all of the criminals and determine if each one is a vandal
    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })

    // Clear inner HTML of the criminal list
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
})



eventHub.addEventListener("officerChosen", event => {

    const officers = useOfficers()
    const criminals = useCriminals()

    const arrestingOfficers = criminals.filter(criminalObject => {
    if(event.detail.chosenOfficer === criminalObject.arrestingOfficer) {
            return true
    }
    else return false
})
  contentTarget.innerHTML = ""

  for (const singleOfficer of arrestingOfficers) {
      contentTarget.innerHTML += Criminal(singleOfficer)
  }



})


  export const CriminalList = () => {
  const criminals = useCriminals()

  for (const singleCriminal of criminals) {
      contentTarget.innerHTML += Criminal(singleCriminal)
  }
}





