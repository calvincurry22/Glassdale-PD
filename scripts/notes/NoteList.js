import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"




const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
let visibility = false

// eventHub.addEventListener("noteStateChanged", customEvent => {
//     NoteList()
// })

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
        getNotes().then(NoteList)
    } else {
        contentTarget.classList.add("invisible")
    }
    
})


const createNote = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                <p>${note.noteText}</p>
                <button id="deleteNote--${note.id}">Delete</button>
            </section>
        `
    }).join("")
}


export const NoteList = () => {
    
    const notesArray = useNotes()
    const criminals = useCriminals()
    

    createNote(notesArray, criminals)
}





eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
             NoteList()  
           }
       )
    }
})