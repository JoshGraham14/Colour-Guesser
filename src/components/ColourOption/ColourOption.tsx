import CSS from 'csstype'

import './ColourOption.css'
import { Colour } from '../../generateColours'

interface Props {
	colour: Colour
}

export const ColourOption = (props: Props) => {
	const { red, green, blue } = props.colour

	return (
		<button
			className='colour-option'
			style={
				{
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				} satisfies CSS.Properties
			}
		></button>
	)
}
