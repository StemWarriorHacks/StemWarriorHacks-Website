import Track from './Track'
import { tracks } from '../utils/data'

const Tracks = () => {
	return (
		<div
			id='tracks'
			className='overflow-x-hidden flex flex-col justify-center items-center'>
			<p
				className='text-4xl text-center font-bold my-6'
				style={{
					boxShadow: 'inset 0 -.400em 0 0 rgba(255,190,0, 0.4)',
				}}>
				Tracks
			</p>
			<div className='mt-6 grid gap-6 mb-8 sm:grid-cols-2'>
				{tracks.map((track, i) => (
					<Track
						className='flex-1'
						key={i}
						name={track.name}
						img={track.image}
						description={track.description}
					/>
				))}
			</div>
		</div>
	)
}

export default Tracks
