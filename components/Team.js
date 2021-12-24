import { useContext } from 'react'
import { leaders } from '../utils/data'
import { StateContext } from '../utils/StateContext'
import Member from './Member'

const Team = () => {
	const { state } = useContext(StateContext)
	console.log(leaders)

	return (
		<div
			id='team'
			data-aos='slide-up'
			className={`glass ${
				state && 'dark'
			} overflow-x-hidden flex flex-col justify-center items-center my-6 rounded-lg md:border-2 md:border-gray-200 md:dark:border md:dark:border-gray-500 px-2 md:px-8 py-10`}>
			<p
				className='text-4xl text-center font-bold my-6'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Our Team
			</p>
			<div className='mt-6 grid gap-6 mb-8 sm:grid-cols-2'>
				{leaders.map((leader) => (
					<Member key={leader.name} {...leader} />
				))}
			</div>
		</div>
	)
}

export default Team
