import { useCriminals } from "./CriminalDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".knownAssociatesContainer")

eventHub.addEventListener("knownAssociatesClicked", event => 
    {
        const criminals = useCriminals()

        const associateButtonID = event.detail.chosenCriminal

        criminals.find( 
            criminalObject => {

                if(parseInt(associateButtonID) === criminalObject.id) {
                return true
                }
            return false
            }
        )
                KnownAssociatesDialog(criminals)

                const dialogBox = document.querySelector("#associateDialog")
                dialogBox.showModal()
    })


export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="associateDialog">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<p>${currentAssociate.name}</p>
                                <p>${currentAssociate.alibi}</p>
                                `
                    }
                ).join("")
            }
        </dialog>
    `
}


//Running into an error at line 33 with criminalObject.known_associates.map being undefined