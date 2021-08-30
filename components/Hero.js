import { urls } from '../utils/data'
import Navbar from './Navbar'

// const Snow = dynamic(import('../utils/Snow'), { ssr: false })

const Hero = () => {
	return (
		<div className='h-screen text-white flex justify-center items-center'>
			{/* <div className='print-none absolute max-w-screen -z-1'>
				<Snow />
			</div> */}
			{/* <Navbar /> */}
			<div className='flex flex-col justify-center items-center md:items-flexstart w-11/12 md:w-4/5 my-10 mx-auto'>
				<p className='text-5xl md:text-8xl font-bold mb-4'>
					<span className='text-primary'>S</span>tem
					<span className='text-primary'>W</span>arrior{' '}
					<span className='text-primary'>H</span>acks
				</p>
				<p className='text-2xl md:text-3xl'>
					November <span>3rd to 5th</span>, 2021
				</p>
				<div className='flex flex-col justify-between md:flex-row w-4/5 md:w-3/5 lg:1/2'>
					<a href={urls.devpost}>
						<button className='btn px-6 py-2 my-6 bg-primary text-dark text-lg font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'>
							Register on Devpost
						</button>
					</a>
					<a href={urls.discord} target='_blank' rel='noreferrer'>
						<button className='btn px-6 py-2 my-6 bg-primary text-dark text-lg font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'>
							Join our Discord
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
