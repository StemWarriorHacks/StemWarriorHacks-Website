import { useContext } from 'react'
import { StateContext } from '../utils/StateContext'

const Sponsors = () => {
	const { state } = useContext(StateContext)

	return (
		<div
			id='sponsors'
			className={`glass ${
				state && 'dark'
			} overflow-x-hidden flex flex-col justify-center items-center my-6 rounded-lg md:border-2 md:border-gray-200 md:dark:border md:dark:border-gray-500`}>
			<p
				className='text-4xl text-center font-bold my-6'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Sponsors
			</p>
			<a
				href='https://drive.google.com/file/d/12DSuL7gvmbd1gUg9kHRUJej23ZNbWMsv/view'
				target='_blank'
				rel='noreferrer'>
				<button className='btn px-6 py-2 my-6 bg-primary text-dark text-lg font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'>
					View our Sponsorship Prospectus
				</button>
			</a>
		</div>
	)
}

export default Sponsors
