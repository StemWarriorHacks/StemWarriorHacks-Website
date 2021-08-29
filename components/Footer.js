import React from 'react'
import {
	FaDiscord,
	FaInstagram,
	FaGithub,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import Link from 'next/link'
import { urls } from '../utils/data'

const Service = ({ href, label, color, children }) => (
	<Link href={href} aria-label={label}>
		<a target='_blank' className={`text-2xl hover:text-${color}-500`}>
			{children}
		</a>
	</Link>
)

const Footer = ({ children }) => (
	<>
		<svg viewBox='0 0 120 28'>
			<defs>
				<filter id='goo'>
					<feGaussianBlur in='SourceGraphic' stdDeviation='1' result='blur' />
					<feColorMatrix
						in='blur'
						mode='matrix'
						values='
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9'
						result='goo'
					/>
					<xfeBlend in='SourceGraphic' in2='goo' />
				</filter>
				<path
					id='wave'
					d='M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z'
				/>
			</defs>
			<use id='wave4' className='wave' xlinkHref='#wave' x='0' y='-5'></use>
			<use id='wave3' className='wave' xlinkHref='#wave' x='0' y='0'></use>
			<use id='wave2' className='wave' xlinkHref='#wave' x='0' y='3'></use>
			<use id='wave1' className='wave' xlinkHref='#wave' x='0' y='5'></use>
		</svg>
		<div
			id='footer'
			className='footer m-0 flex flex-col justify-center items-center bg-dark text-white'>
			{children}
			<p
				className='text-3xl min-w-1/3 font-bold pt-4 mb-2'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Contact us
			</p>
			<a className='email hover:text-yellow-500 text-lg' href={urls.email}>
				contact@stemwarriorhacks.org
			</a>
			<div className='services flex py-6 w-9/12 sm:w-1/3 justify-around'>
				<Service href={urls.discord} label='discord' color='purple'>
					<FaDiscord />
				</Service>
				<Service href={urls.instagram} color='pink' label='instagram'>
					<FaInstagram />
				</Service>
				<Service href={urls.github} color='gray' label='github'>
					<FaGithub />
				</Service>
				<Service href={urls.twitter} color='blue' label='twitter'>
					<FaTwitter />
				</Service>
				<Service href={urls.youtube} color='red' label='youtube'>
					<FaYoutube />
				</Service>
			</div>
			<p className='text-sm py-3 text-gray-400'>
				Copyright © 2021 StemWarriorHacks. All rights reserved.
			</p>
		</div>
	</>
)

export default Footer
