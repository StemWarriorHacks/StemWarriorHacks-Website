import dynamic from 'next/dynamic'
// import Image from 'next/image'
import { useContext } from 'react'
import About from '../components/About'
import Schedule from '../components/Schedule'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Sponsors from '../components/Sponsors'
import Tracks from '../components/Tracks'
import { StateContext } from '../utils/StateContext'

const Blobs = dynamic(import('../utils/Blobs'), { ssr: false })
const Background = dynamic(import('../utils/Background'), { ssr: false })
const NightBg = dynamic(import('../utils/NightBg'), { ssr: false })
// const Snow = dynamic(import('../utils/Snow'), { ssr: false })
// const Forest = dynamic(import('../utils/Forest'), { ssr: false })

const Home = () => {
	const { state, setState } = useContext(StateContext)
	// const theme = state ? 'dark' : 'light'
	// localStorage.setItem('theme', theme)

	// if (
	// 	localStorage.getItem(theme) === 'dark' ||
	// 	(!('theme' in localStorage) &&
	// 		window.matchMedia('(prefers-color-scheme: dark)').matches)
	// ) {
	// 	setState(false)
	// }

	return (
		<div className={state ? 'dark' : ''}>
			<div className='absolute top-full max-w-full -z-1'>
				<Blobs />
			</div>
			<div className='absolute max-w-full -z-1'>
				{state ? <NightBg /> : <Background />}
			</div>
			<Hero />
			<div className='select-none w-11/12 md:w-4/5 my-10 mx-auto dark:text-light'>
				<About />
				<Tracks />
				<Schedule />
				<Sponsors />
				<Faq />
			</div>
			<Footer>
				<div onClick={() => setState(!state)}>
					<img
						src='/logo.png'
						width='50'
						height='50'
						className='rounded-lg'
						alt='dark'
					/>
				</div>
			</Footer>
		</div>
	)
}

export default Home
