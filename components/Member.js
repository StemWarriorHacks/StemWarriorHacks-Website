// import Image from 'next/image'
import { useContext } from 'react'
import { StateContext } from '../utils/StateContext'

const Member = ({ name, img, pronouns, role }) => {
	const { state } = useContext(StateContext)

	return (
		<div
			data-aos='zoom-in'
			className={`glass ${
				state && 'dark'
			} flex flex-col md:flex-row md:text-left text-center items-center p-4 border-2 border-gray-200 dark:border dark:border-gray-500 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-xl`}>
			{/* <Image src={img} alt={name} width='25px' height='25px' /> */}
			<div>
				<p className='mb-2 text-md xl:text-xl font-semibold'>
					{name + ' · ' + pronouns}
				</p>
				<p
					className='inline-block text-md font-medium text-gray-800 dark:text-light mb-4 md:mb-0'
					style={{
						boxShadow: 'inset 0 -.600em 0 0 rgba(255,190,0, 0.4)',
					}}>
					{role}
				</p>
			</div>
		</div>
	)
}

export default Member
