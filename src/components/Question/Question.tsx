import { Colour } from '../../generateColours'

interface Props {
	colour: Colour
}

export const Question = (props: Props) => {
	const { colour } = props
	return (
		<h3>
			({colour.red}, {colour.green}, {colour.blue})
		</h3>
	)
}
