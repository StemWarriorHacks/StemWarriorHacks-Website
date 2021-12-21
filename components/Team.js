import Image from 'next/image'

const Team = () => {
	return (
		<div
			id='team'
			data-aos='slide-up'
			className={`glass ${
				state && 'dark'
			} overflow-x-hidden flex flex-col justify-center items-center my-6 rounded-lg md:border-2 md:border-gray-200 md:dark:border md:dark:border-gray-500 px-2 md:px-8 py-10`}>
			<p
				className='text-4xl text-center font-bold my-6'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Team
			</p>
			<div className='flex flex-col md:w-10/12 justify-center items-center'>
				<div className='relative grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-4 mx-auto w-full'>
					{team.map((member) => (
						<a
							href={member.link}
							target='_blank'
							className='mx-auto'
							rel='noopener noreferrer'
							key={member.name}
							data-aos='zoom-in'
							style={{
								position: 'relative',
								width: '250px',
								height: '200px',
							}}>
							<Image
								src={member.image}
								alt={member.name}
								layout='fill'
								objectFit='contain'
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Team
