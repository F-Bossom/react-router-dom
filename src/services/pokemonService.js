const pokeURL = "https://pokeapi.co/api/v2/pokemon/"

// Show all pokemon
export const index = async () => {
    try {
        const response = await fetch(pokeURL)
        const data = await response.json()

        return data
    } catch (error) {
        console.log("Error fetching pokemon:", error);
    }
}

// Show one pokemon
export const show = async (id) => {
    try {
        const response = await fetch(`${pokeURL}${id}`)
        const data = await response.json()

        return data
    } catch (error) {
        console.log("Error fetching pokemon:", error);
    }
}

// You could use the below method instead of exporting the functions in 1 line as shown above, 1 line is preferred though
// export {
//     show,
//     index
// }