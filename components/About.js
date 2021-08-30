const About = () => {
	const textUnder = {
		boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
	}
	return (
		<div className='glass overflow-x-hidden h-3/4 flex flex-col justify-center items-center md:border-2 md:border-gray-200 rounded-lg md:shadow-sm mb-10 px-8 py-10'>
			<p className='text-4xl font-bold my-6' style={textUnder}>
				Our Mission
			</p>
			<p className=''>
				StemWarriorHacks is an international, student-run,{' '}
				<span style={textUnder}>501(c)(3) non-profit</span> hackathon aiming to
				inspire young innovators and thinkers to pursue a career in the field of
				programming and open their eyes to the depths, diversity, and power of
				computer science. We hope that these students will be able to explore a
				wide-range of coding topics when creating their projects, interacting in
				our workshops, or attending our speaker events, and will be filled with
				a sense of deep wonder, pride, and curiosity for the discoveries and
				achievements they will acquire.
			</p>
		</div>
	)
}

export default About
