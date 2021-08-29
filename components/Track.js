import Image from 'next/image'

const Track = ({ name, img, description }) => (
	<div className='card shadow-lg rounded-lg flex flex-col justify-center items-center h-100 w-100'>
		<Image src={img} alt={name} width='50px' height='50px' />
		<p
			className='text-lg my-4'
			style={{
				boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
			}}>
			{name}
		</p>
		<p className='text-md px-6 mb-10'>{description}</p>
	</div>
)

export default Track
