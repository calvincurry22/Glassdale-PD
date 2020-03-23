import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"




const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("noteStateChanged", customEvent => {
//     NoteList()
// })

eventHub.addEventListener("allNotesClicked", customEvent => {
    getNotes().then(NoteList)
})


const createNote = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    }).join("")
}


export const NoteList = () => {
    
    const notesArray = useNotes()
    const criminals = useCriminals()
    

    createNote(notesArray, criminals)
}

