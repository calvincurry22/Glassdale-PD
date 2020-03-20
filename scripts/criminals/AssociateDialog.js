import { useCriminals } from "./CriminalDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".knownAssociatesContainer")

eventHub.addEventListener("knownAssociatesClicked", event => 
    {
        const criminals = useCriminals()

        const associateButtonID = event.detail.chosenCriminal
        
        let oneCriminal= criminals.find( 
            criminalObject => {

                if(parseInt(associateButtonID) === criminalObject.id) {
                    
                return true
                }
            return false
            }
        )
                
                KnownAssociatesDialog(oneCriminal)
                
                const dialogBox = document.querySelector("#associateDialog")
                dialogBox.showModal()
    })


export const KnownAssociatesDialog = (criminalObject) => {
    
    contentTarget.innerHTML = `
        <dialog id="associateDialog">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<p class="alibiName">Name: ${currentAssociate.name}</p>
                                <p class="alibiInfo">Alibi: ${currentAssociate.alibi}</p>
                                `
                    }
                ).join("")
            }
        </dialog>
    `
}


//Running into an error at line 33 with criminalObject.known_associates.map being undefined