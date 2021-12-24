import { useContext, useEffect } from 'react'
import AOS from 'aos'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import About from '../components/About'
import Schedule from '../components/Schedule'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Sponsors from '../components/Sponsors'
import Tracks from '../components/Tracks'
import Team from '../components/Team'
import { StateContext } from '../utils/StateContext'

const Blobs = dynamic(import('../utils/Blobs'), { ssr: false })
const Background = dynamic(import('../utils/Background'), { ssr: false })
const NightBg = dynamic(import('../utils/NightBg'), { ssr: false })

const Home = () => {
	const { state, setState } = useContext(StateContext)
	useEffect(() => {
		AOS.init({ duration: 500 })
	}, [])

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
				<Team />
				<Sponsors />
				<Faq />
			</div>
			<Footer>
				<div data-aos='zoom-in' onClick={() => setState(!state)}>
					<Image
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
