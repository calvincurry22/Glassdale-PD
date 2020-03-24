

const eventHub = document.querySelector(".container")
const witnessButtonContainer = document.querySelector(".witness__button")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllWitnesses") {
        const witnesssButtonClickEvent = new CustomEvent("witnessButtonClick")

        eventHub.dispatchEvent(witnesssButtonClickEvent)
    }
})




export const DisplayWitnessButton = () => {
    witnessButtonContainer.innerHTML = `
        <button id="showAllWitnesses">Show Witnesses</button>
    `
}