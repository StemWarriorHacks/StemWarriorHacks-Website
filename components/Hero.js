import { urls } from '../utils/data'
import Navbar from './Navbar'

const Hero = () => {
	return (
		<div id='home' className='h-screen'>
			<Navbar />
			<div className='flex flex-col justify-center items-center h-3/5 w-11/12 md:w-4/5 my-10 mx-auto'>
				<p
					data-aos='slide-up'
					className='text-5xl md:text-8xl font-bold mb-4 text-dark w-full text-center'>
					Stem Warrior Hacks
				</p>
				<p
					data-aos='slide-up'
					className='text-2xl font-semibold md:text-3xl mb-4'>
					November 5th - 8th, 2021
				</p>
				<div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-4/5 xl:w-3/6'>
					<a href={urls.devpost}>
						<button
							data-aos='slide-up'
							aria-label='register on devpost'
							className='btn px-6 py-2 my-2 md:my-6 w-56 bg-primary text-dark text-lg font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'>
							Register on Devpost
						</button>
					</a>
					<a href={urls.discord} target='_blank' rel='noopener noreferrer'>
						<button
							data-aos='slide-up'
							aria-label='join discord'
							className='px-6 py-2 my-2 md:my-6 w-56 bg-primary text-dark text-lg font-bold rounded-lg hover:ring-4 hover:ring-primary hover:ring-opacity-50'>
							Join our Discord
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
