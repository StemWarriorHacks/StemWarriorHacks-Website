import dynamic from 'next/dynamic'
import Link from 'next/link'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Sponsors from '../components/Sponsors'
import Tracks from '../components/Tracks'
import { name } from '../utils/data'

const Blobs = dynamic(import('../utils/Blobs'), { ssr: false })
const Snow = dynamic(import('../utils/Snow'), { ssr: false })

const Home = () => (
	<div>
		{/* <div className='absolute bg'></div> */}
		<div className='absolute top-full max-w-full -z-1'>
			<Blobs />
		</div>
		<div className='absolute max-w-full -z-1'>
			<Snow />
		</div>
		<Hero />
		<div className='select-none w-11/12 md:w-4/5 my-10 mx-auto'>
			<About />
			<Tracks />
			<Sponsors />
		</div>
		<Footer />
	</div>
)

export default Home
