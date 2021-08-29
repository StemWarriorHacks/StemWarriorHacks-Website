import dynamic from 'next/dynamic'
import Link from 'next/link'
import About from '../components/About'
import Footer from '../components/Footer'
import Tracks from '../components/Tracks'
import { name } from '../utils/data'

const Blobs = dynamic(import('../utils/Blobs'), { ssr: false })
const Snow = dynamic(import('../utils/Snow'), { ssr: false })

const Home = () => (
	<div>
		{/* <div className='absolute bg'></div>
		<div className='blob print-none absolute max-w-screen -z-1'>
			<Blobs />
		</div>
		<a href='#about'>about</a>
		<a href='#footer'>footer</a>
		<div className='print-none absolute max-w-screen -z-1'>
			<Snow />
		</div> */}
		<div className='max-w-11/12 md:max-w-3xl mx-4 md:mx-auto'>
			<Tracks />
			<About />
		</div>
		{/* <Footer>{name}</Footer> */}
	</div>
)

export default Home
