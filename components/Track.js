import Image from 'next/image'

const Track = ({ name, img, description }) => (
	<div className='glass flex flex-col md:flex-row md:text-left text-center items-center p-6 border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md'>
		{/* <Image src={img} alt={name} width='25px' height='25px' /> */}
		<div className='p-3 m-4 bg-primary text-dark rounded-full'>
			<svg
				className='w-6 h-6'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z'></path>
			</svg>
		</div>
		<div>
			<p
				className='mb-2 text-xl font-semibold'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				{name}
			</p>
			<p className='text-md font-normal text-gray-800 mb-4 md:mb-0'>
				{description}
			</p>
		</div>
	</div>
)

export default Track
