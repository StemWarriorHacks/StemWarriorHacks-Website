import { useState } from 'react'
import { questions } from '../utils/data'

const Faqs = () => {
	const [clicked, setClicked] = useState(false)
	const [rotate, setRotate] = useState('transform duration-700 ease')

	const toggle = (i) => {
		if (clicked === i) {
			return setClicked(null)
		}
		setClicked(i)
	}
	return (
		<div>
			{questions.map((q, i) => (
				<>
					<div onClick={() => toggle(i)} key={i}>
						<span className={`${rotate} inline-block`}>❄️ </span>
						<p>{q.question}</p>
					</div>
					{clicked === i ? (
						<div>
							<p>{q.answer}</p>
						</div>
					) : null}
				</>
			))}
		</div>
	)
}

export default Faqs
