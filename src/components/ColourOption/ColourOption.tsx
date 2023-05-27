import CSS from 'csstype'

import './ColourOption.css'
import { Colour } from '../../generateColours'

interface Props {
	colour: Colour
	setChosen: React.Dispatch<React.SetStateAction<Colour | undefined>>
}

export const ColourOption = (props: Props) => {
	const { red, green, blue } = props.colour
	const { setChosen } = props

	const handleClick = () => {
		setChosen(new Colour(red, green, blue))
	}

	return (
		<button
			className='colour-option'
			style={
				{
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				} satisfies CSS.Properties
			}
			onClick={handleClick}
		></button>
	)
}
