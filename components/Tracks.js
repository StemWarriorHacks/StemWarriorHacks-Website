import Track from './Track'
import { tracks } from '../utils/data'

const Tracks = () => {
	return (
		<div className='flex h-96 w-96 justify-between'>
			{tracks.map((track, i) => (
				<Track
					className='flex-1'
					key={i}
					name={track.name}
					img='/blob-scene.svg'
					description={track.description}
				/>
			))}
		</div>
	)
}

export default Tracks
