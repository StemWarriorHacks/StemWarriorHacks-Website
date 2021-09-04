import { useState } from 'react'
import Image from 'next/image'
const Navbar = () => {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(!active)
	}

	return (
		<>
			<nav className='glass rounded-b-lg flex items-center flex-wrap p-2 '>
				<a className='inline-flex items-center p-2 mr-4' href='/logo.png'>
					<div
						viewBox='0 0 24 24'
						className='fill-current text-dark h-8 w-8 mr-2'>
						<Image
							src='/logo.png'
							height='100px'
							width='100px'
							alt='StemWarriorHack'
							className='rounded-lg'
						/>
					</div>

					<span className='text-xl text-black font-bold uppercase tracking-wide'>
						StemWarriorHacks
					</span>
				</a>
				<button
					className=' inline-flex p-3 rounded lg:hidden ml-auto text-dark outline-none'
					onClick={handleClick}>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
				<div
					className={`${
						active ? '' : 'hidden'
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
						<a
							href='#home'
							className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  hover:text-primary dark:hover:text-white '>
							HOME
						</a>
						<a
							href='#about'
							className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  hover:text-primary dark:hover:text-white'>
							ABOUT
						</a>
						<a
							href='#schedule'
							className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-primary dark:hover:text-white'>
							SCHEDULE
						</a>
						<a
							href='#sponsors'
							className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center  hover:text-primary dark:hover:text-white'>
							SPONSORS
						</a>
						<a
							href='#faqs'
							className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-primary dark:hover:text-white'>
							FAQ
						</a>
						<a
							href='#footer'
							className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-primary dark:hover:text-white'>
							CONTACT
						</a>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
