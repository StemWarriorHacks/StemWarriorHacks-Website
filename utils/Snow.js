import { memo } from 'react'
import Sketch from 'react-p5'

const Snow = () => {
	const SNOWFLAKES_PER_LAYER = 20
	const MAX_SIZE = 5
	const GRAVITY = 0.75
	const LAYER_COUNT = 3

	const WIND_SPEED = 1
	const WIND_CHANGE = 0.0025

	let width = window.innerWidth
	let height = window.innerHeight

	const SNOWFLAKES = []

	const isSmallScreen = matchMedia('screen and (max-width: 480px)').matches

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(
			canvasParentRef
		)
		p5.noStroke()

		for (let l = 0; l < LAYER_COUNT; l++) {
			SNOWFLAKES.push([])
			for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
				SNOWFLAKES[l].push({
					x: p5.random(width),
					y: p5.random(height),
					mass: p5.random(0.75, 1.25),
					l: l + 1,
				})
			}
		}
	}

	const windowResized = (p5) => {
		width = window.innerWidth
		height = window.innerHeight
		p5.resizeCanvas(width, height)
	}

	const draw = (p5) => {
		p5.background('#262626')

		for (let l = 0; l < SNOWFLAKES.length; l++) {
			const LAYER = SNOWFLAKES[l]

			for (let i = 0; i < LAYER.length; i++) {
				const snowflake = LAYER[i]
				p5.circle(
					snowflake.x,
					snowflake.y,
					(snowflake.l * MAX_SIZE) / LAYER_COUNT
				)
				update(snowflake, p5)
			}
		}
	}

	const update = (snowflake, p5) => {
		const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT
		if (snowflake.y > height + diameter) snowflake.y = -diameter
		else snowflake.y += GRAVITY * snowflake.l * snowflake.mass

		// Get the wind speed at the given layer and area of the page
		const wind =
			p5.noise(
				snowflake.l,
				snowflake.y * WIND_CHANGE,
				p5.frameCount * WIND_CHANGE
			) - 0.5
		if (snowflake.x > width + diameter) snowflake.x = -diameter
		else if (snowflake.x < -diameter) snowflake.x = width + diameter
		else snowflake.x += wind * WIND_SPEED * snowflake.l
	}

	return (
		<Sketch
			setup={setup}
			draw={draw}
			windowResized={windowResized}
			role='img'
		/>
	)
}

export default memo(Snow)
