import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalNumber = document.querySelector("#criminalSelect").value
        // const criminalsArray = useCriminals()
        
        // const foundCriminal = criminalsArray.find(singleCriminal => singleCriminal.name === criminalName)
        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            timestamp: Date.now(),
            criminal: criminalNumber
        }

        // Change API state and application state
        saveNote(newNote)
        
    }
})

const render = () => {
    

    const criminalCollection = useCriminals()

    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <fieldset>
        <select class="dropdown" id="criminalSelect"> 
        <option value="0">Select an criminal</option>
         ${criminalCollection.map(
            criminalObject => {
                return `<option value="${criminalObject.id}">${criminalObject.name}</option>`
            }  
         )}
    </select>
        </fieldset>
        <button id="saveNote">Save Note</button>
    `
}

 const NoteForm = () => {
    
    render()
}

export default NoteForm