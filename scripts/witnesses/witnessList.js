import { useWitnesses, getWitnesses } from "./witnessProvider.js";
import { Witness } from "./witness.js";

const witnessContainer = document.querySelector(".witnessContainer")
const eventHub = document.querySelector(".container")
let isVisible = false


eventHub.addEventListener("witnessButtonClick", customEvent => {
    isVisible = !isVisible

    if (isVisible) {
        witnessContainer.classList.remove("invisible")
        renderWitnesses()
    }
    else {
        witnessContainer.classList.add("invisible")
    }
})

const renderWitnesses = () => {
    getWitnesses().then(
        () => {
            const witnessArray = useWitnesses()
            witnessContainer.innerHTML = witnessArray.map(
                witnessObject => {
                  return Witness(witnessObject)
                }
            ).join("")
        }
    )
}


export const WitnessList = () => {
    renderWitnesses()
}


