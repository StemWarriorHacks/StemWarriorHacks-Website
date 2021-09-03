import { questions } from '../utils/data'
import AccordionItem from './AccordionItem'

const Accordion = () => {
	return (
		<div>
			{questions.map((q, i) => (
				<AccordionItem
					key={i}
					title={q.question}
					content={q.answer}
					index={i}
				/>
			))}
		</div>
	)
}

export default Accordion
