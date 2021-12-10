import Image from 'next/image'
import { useContext } from 'react'
import { sponsors } from '../utils/data'
import { StateContext } from '../utils/StateContext'

const Sponsors = () => {
	const { state } = useContext(StateContext)

	return (
		<div
			id='sponsors'
			data-aos='slide-up'
			className={`glass ${
				state && 'dark'
			} overflow-x-hidden flex flex-col justify-center items-center my-6 rounded-lg md:border-2 md:border-gray-200 md:dark:border md:dark:border-gray-500 px-2 md:px-8 py-10`}>
			<p
				className='text-4xl text-center font-bold my-6'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Sponsors
			</p>
			<div className='flex flex-col md:w-10/12 justify-center items-center'>
				<a
					href='https://drive.google.com/file/d/12DSuL7gvmbd1gUg9kHRUJej23ZNbWMsv/view'
					target='_blank'
					rel='noopener noreferrer'>
					<button
						aria-label='sponsorship prospectus'
						className='btn px-6 py-2 my-6 bg-primary text-dark text-lg font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'>
						View our Sponsorship Prospectus
					</button>
				</a>
				<div className='relative grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-4 mx-auto w-full'>
					{sponsors.map((sponsor) => (
						<a
							href={sponsor.link}
							target='_blank'
							className='mx-auto'
							rel='noopener noreferrer'
							key={sponsor.name}
							data-aos='zoom-in'
							style={{
								position: 'relative',
								width: '250px',
								height: '200px',
							}}>
							<Image
								src={sponsor.image}
								alt={sponsor.name}
								layout='fill'
								objectFit='contain'
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sponsors
