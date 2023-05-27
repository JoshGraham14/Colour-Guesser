import { Colour } from '../../generateColours'
import './Question.css'

interface Props {
	colour: Colour
}

export const Question = (props: Props) => {
	const { colour } = props
	return (
		<h1 className='question'>
			(<span className='red'>{colour.red}</span>,{' '}
			<span className='green'>{colour.green}</span>,{' '}
			<span className='blue'>{colour.blue}</span>)
		</h1>
	)
}
