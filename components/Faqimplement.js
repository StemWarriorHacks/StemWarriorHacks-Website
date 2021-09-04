import { useContext, useState } from 'react'
import { StateContext } from '../utils/StateContext'

const Faqimplement = ({ question, answer, onClick, show }) => {
	const { state } = useContext(StateContext)
	const textUnder = show
		? {
				boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
		  }
		: null

	return (
		<div
			className={`p-2 glass ${
				state && 'dark'
			} rounded-lg shadow-sm md:shadow-none border-b dark:border-none cursor-pointer`}>
			<p
				className={`flex justify-between items-center text-lg p-2 ${
					show && 'font-semibold'
				}`}
				style={textUnder}
				onClick={onClick}>
				{question}
				<span className='text-xl font-bold'>{show ? '-' : '+'}</span>
			</p>
			{show && (
				<p
					dangerouslySetInnerHTML={{ __html: answer }}
					className='transistion trsnsistion-delay-700 p-2 rounded-lg text-gray-800 dark:text-light'></p>
			)}
		</div>
	)
}

export default Faqimplement
