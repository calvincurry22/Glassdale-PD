import { useCriminals } from './CriminalDataProvider.js'
import { getCriminals } from './CriminalDataProvider.js'
import Criminal from './Criminal.js'


/* In our function, we want the following actions to occur: 
  -select a target on the DOM for our criminal data to be sent to
  -convert our criminal data into readable html for the DOM */


  const contentTarget = document.querySelector(".criminalsContainer")


  const CriminalList = () => {
      

        const criminalsArrayOfObjects = useCriminals()

        let criminalHTMLRepresentation = ""

        for (const criminalObject of criminalsArrayOfObjects) {
                 
            criminalHTMLRepresentation += Criminal(criminalObject)
        }
    
   contentTarget.innerHTML += criminalHTMLRepresentation
      
}


export default CriminalList 
