import { useContext, useState } from 'react'
import { questions } from '../utils/data'
import { StateContext } from '../utils/StateContext'
import Faqimplement from './Faqimplement'

export const Faq = () => {
	const { state } = useContext(StateContext)
	const [clicked, setClicked] = useState(null)

	const toggle = (i) => {
		if (clicked === i) {
			return setClicked(null)
		}
		setClicked(i)
	}

	return (
		<div
			id='faqs'
			className={`glass ${
				state && 'dark'
			}  overflow-x-hidden h-3/4 flex flex-col justify-center items-center md:border-2 md:border-gray-200 md:dark:border md:dark:border-gray-500 rounded-lg md:shadow-sm my-10 px-4 md:px-10 md:px-4 py-10`}>
			<p
				className='text-4xl font-bold mb-4 mt-2'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				FAQ
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-2 md:p-8'>
				{questions.map((q, i) => (
					<Faqimplement
						key={i}
						question={q.question}
						answer={q.answer}
						onClick={() => toggle(i)}
						show={clicked === i}
					/>
				))}
			</div>
		</div>
	)
}

export default Faq
