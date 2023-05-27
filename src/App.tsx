import { useState, useEffect } from 'react'
import { ColourOption } from './components/ColourOption/ColourOption'
import { Header } from './components/Header/Header'
import { generateColours, Colour } from './generateColours'
import { Question } from './components/Question/Question'
import './App.css'

const App = () => {
	const [colourOptions, setColourOptions] = useState<Colour[]>([])
	const [answer, setAnswer] = useState<Colour>({} as Colour)
	const [chosen, setChosen] = useState<Colour | undefined>()
	const [success, setSuccess] = useState<boolean>()
	const numColours = 4

	useEffect(() => {
		const colours: Colour[] = generateColours(numColours)
		setColourOptions(colours)
		const randomIndex = Math.round(Math.random() * (numColours - 1))
		setAnswer(colours[randomIndex])
	}, [])

	useEffect(() => {
		if (chosen === undefined) {
			return
		} else if (chosen.equals(answer)) {
			setSuccess(true)
		} else {
			setSuccess(false)
		}
	}, [chosen])

	return (
		<>
			<Header />
			<main>
				<Question colour={answer} />
				<div className='colour-options-container'>
					{colourOptions.map((colour, idx) => {
						return (
							<ColourOption
								colour={colour}
								setChosen={setChosen}
								key={idx}
							/>
						)
					})}
				</div>
				<h1>
					{success !== undefined
						? success === true
							? 'Correct :)'
							: 'Incorrect :('
						: ''}
				</h1>
			</main>
		</>
	)
}

export default App
