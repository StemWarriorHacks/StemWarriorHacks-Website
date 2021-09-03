import { useState, useRef } from 'react'

const AccordionItem = ({ title, content, index }) => {
	const [clicked, setClicked] = useState(false)
	const [active, setActive] = useState(false)
	const [height, setHeight] = useState('0px')
	const [rotate, setRotate] = useState('transform duration-700 ease')

	const contentSpace = useRef(null)

	const toggleAccordionItem = (i) => {
		if (clicked === i) {
			return setClicked(null)
		}
		setClicked(i)
		setActive(active === false ? true : false)
		setHeight(clicked === i ? '0px' : `${contentSpace.current.scrollHeight}px`)
		setRotate(
			active
				? 'transform duration-700 ease'
				: 'transform duration-700 ease rotate-180'
		)
	}
	return (
		<div className='flex flex-col'>
			<button
				className='py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between'
				onClick={toggleAccordionItem}>
				<p className='inline-block text-footnote light'>{title}</p>
				<span className={`${rotate} inline-block`}>❄️</span>
			</button>
			<div
				ref={contentSpace}
				style={{ maxHeight: `${height}`, overflowY: 'hidden' }}
				className='overflow-auto transition-max-height duration-700 ease-in-out'>
				<div className='pb-10'>{content}</div>
			</div>
		</div>
	)
}

export default AccordionItem
