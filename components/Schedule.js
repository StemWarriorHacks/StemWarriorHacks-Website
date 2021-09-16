import { useContext, useState } from 'react'
import { schedule } from '../utils/data'
import { StateContext } from '../utils/StateContext'

const Event = ({ data }) => {
	return (
		<div>
			{data.map((item, index) => (
				<div key={index}>
					<div className='flex items-center w-full'>
						<h4 className='text-lg md:text-xl text-primary font-semibold py-2 w-1/2 md:w-1/3'>
							{item.time}
						</h4>
						<h4 className='text-lg md:text-xl w-full'>{item.name}</h4>
					</div>
				</div>
			))}
		</div>
	)
}

const Schedule = () => {
	const [active, setActive] = useState('DayOne')
	const { state } = useContext(StateContext)

	return (
		<div
			id='schedule'
			className={`glass ${
				state && 'dark'
			} overflow-x-hidden h-3/4 flex flex-col justify-center items-center md:border-2 md:border-gray-200 md:dark:border md:dark:border-gray-500 rounded-lg md:shadow-sm mb-10 px-2 md:px-8 py-10`}>
			<p
				className='text-4xl font-bold my-6'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Schedule
			</p>
			<nav className='flex justify-center items-center'>
				<button
					aria-label='day 1'
					className='btn px-4 md:px-6 py-2 my-4 md:my-6 mx-2 md:mx-4 bg-primary text-dark font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'
					onClick={() => setActive('DayOne')}>
					DayOne
				</button>
				<button
					aria-label='day 2'
					className='btn px-4 md:px-6 py-2 my-4 md:my-6 mx-2 md:mx-4 bg-primary text-dark font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'
					onClick={() => setActive('DayTwo')}>
					DayTwo
				</button>
				<button
					aria-label='day 3'
					className='btn px-4 md:px-6 py-2 my-4 md:my-6 mx-2 md:mx-4 bg-primary text-dark font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'
					onClick={() => setActive('DayThree')}>
					DayThree
				</button>
			</nav>
			<div className='w-full md:w-3/5 mx-auto p-2 rounded-lg'>
				{active === 'DayOne' && <Event data={schedule[0].events} />}
				{active === 'DayTwo' && <Event data={schedule[1].events} />}
				{active === 'DayThree' && <Event data={schedule[2].events} />}
			</div>
		</div>
	)
}

export default Schedule
