import Navbar from './Navbar'

// const Snow = dynamic(import('../utils/Snow'), { ssr: false })

const Hero = () => {
	return (
		<div className='h-screen text-white'>
			{/* <div className='print-none absolute max-w-screen -z-1'>
				<Snow />
			</div> */}
			<Navbar />
		</div>
	)
}

export default Hero
