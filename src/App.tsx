import { useState, useEffect } from 'react'
import { ColourOption } from './components/ColourOption/ColourOption'
import { Header } from './components/Header/Header'
import { generateColours, Colour } from './generateColours'
import { Question } from './components/Question/Question'
import './App.css'

function App() {
	const [colourOptions, setColourOptions] = useState<Colour[]>([])
	const [answer, setAnswer] = useState<Colour>({} as Colour)
	const numColours = 4

	useEffect(() => {
		const colours: Colour[] = generateColours(numColours)
		setColourOptions(colours)
		const randomIndex = Math.round(Math.random() * (numColours - 1))
		setAnswer(colours[randomIndex])
	}, [])

	return (
		<>
			<Header />
			<main>
				<Question colour={answer} />
				<div className='colour-options-container'>
					{colourOptions.map((colour, idx) => {
						return <ColourOption colour={colour} key={idx} />
					})}
				</div>
			</main>
		</>
	)
}

export default App
