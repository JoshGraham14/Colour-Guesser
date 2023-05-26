export type Colour = {
	red: number
	green: number
	blue: number
	alpha?: number
}

/**
 * Generates a random colour.
 * @returns {Colour} A Colour object with no alpha value
 */
export const randomColour = (): Colour => {
	const red: number = Math.round(Math.random() * 255)
	const green: number = Math.round(Math.random() * 255)
	const blue: number = Math.round(Math.random() * 255)

	return { red, green, blue }
}

/**
 * Generates an array of random colours.
 * @param {number} amount - the number of colours in the array.
 * @returns {Colour[]} An array of random colours.
 */
export const generateColours = (amount: number): Colour[] => {
	const colours: Colour[] = []

	for (let i = 0; i < amount; i++) {
		const newColour: Colour = randomColour()
		colours.push(newColour)
	}
	return colours
}
