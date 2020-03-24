let criminals = []

export const useCriminals = () => {
    
    criminals.sort(
        (currentThing, nextThing) => {
            // Get the last name on both objects
            const [currFirstName, currLastName] = currentThing.name.split(" ")
            const [nextFirstName, nextLastName] = nextThing.name.split(" ")

            if (currLastName < nextLastName) { return -1; }
            if (currLastName > nextLastName) { return 1; }
            return 0;
        }
    )
    
    return criminals.slice()
}

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
   return fetch("https://criminals.glassdale.us/criminals")
                .then(response => response.json())
                .then(
                    parsedCriminals => {
                        criminals = parsedCriminals
                    }
                )
}