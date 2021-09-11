import { memo, useContext } from 'react'
import Sketch from 'react-p5'
import { StateContext } from './StateContext'

const Background = () => {
	let isSmallScreen = matchMedia('screen and (max-width: 480px)').matches

	const { state, setState } = useContext(StateContext)
	const SNOW_COLOR = 'snow'
	const SNOWFLAKES_PER_LAYER = isSmallScreen ? 20 : 50
	const MAX_SIZE = isSmallScreen ? 7 : 10
	const GRAVITY = 0.5
	const LAYER_COUNT = 4

	const SKY_COLOR = 'skyblue',
		SKY_SPACE = isSmallScreen ? 0.3 : 0.5,
		SKY_AMP = 150,
		SKY_ZOOM = 0.0025,
		SKY_LAYER_OFFSET = 5

	const WIND_SPEED = 1
	const WIND_CHANGE = 0.0025

	const SUN_COLOR = '#FFF2AD',
		SUN_GLOW = 100,
		SUN_RADIUS = isSmallScreen ? 50 : 100

	const RIDGE_TOP_COLOR = '#BCCEDD',
		RIDGE_BOT_COLOR = '#7E9CB9',
		RIDGE_STEP = 1,
		RIDGE_AMP = isSmallScreen ? 50 : 250,
		RIDGE_ZOOM = isSmallScreen ? 0.01 : 0.005

	const SNOWFLAKES = []

	let width = window.innerWidth
	let height = window.innerHeight

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height).parent(canvasParentRef)
		p5.fill(SNOW_COLOR)
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

	const draw = (p5) => {
		p5.background(SKY_COLOR)
		const skyHeight = Math.round(height * SKY_SPACE)

		for (let i = 1; i < LAYER_COUNT; i++) {
			drawRidge(
				i,
				(i * skyHeight) / LAYER_COUNT,
				SKY_AMP,
				SKY_ZOOM,
				SKY_COLOR,
				SUN_COLOR,
				SKY_LAYER_OFFSET,
				p5
			)
		}

		drawSun(width / 2, skyHeight - RIDGE_AMP / 2, p5)
		// console.log(drawSun(width / 2, skyHeight - RIDGE_AMP / 2, p5))

		// Iterate through the layers of snowflakes
		for (let l = 0; l < SNOWFLAKES.length; l++) {
			const SNOWLAYER = SNOWFLAKES[l]

			// Draw a ridge for each layer of snow
			const layerPosition = l * ((height - skyHeight) / LAYER_COUNT)
			drawRidge(
				l,
				skyHeight * 1.5 + layerPosition,
				RIDGE_AMP,
				RIDGE_ZOOM,
				RIDGE_TOP_COLOR,
				RIDGE_BOT_COLOR,
				0,
				p5
			)

			// Draw each snowflake
			for (let i = 0; i < SNOWLAYER.length; i++) {
				const snowflake = SNOWLAYER[i]
				p5.circle(
					snowflake.x,
					snowflake.y,
					(snowflake.l * MAX_SIZE) / LAYER_COUNT
				)
				updateSnowflake(snowflake, p5)
			}
		}
	}

	// Draw a simple sun
	const drawSun = (x, y, p5) => {
		p5.fill(SUN_COLOR)
		p5.drawingContext.shadowBlur = SUN_GLOW
		p5.drawingContext.shadowColor = SUN_COLOR
		p5.circle(x, y, SUN_RADIUS * 2)
		p5.drawingContext.shadowBlur = 0
	}

	// Compute and draw a ridge
	const drawRidge = (l, y, amp, zoom, c1, c2, coff, p5) => {
		// Choose a color for the ridge based on its height
		const FILL = p5.lerpColor(
			p5.color(c1),
			p5.color(c2),
			l / (LAYER_COUNT - 1 + coff)
		)
		p5.fill(FILL)

		p5.beginShape()
		// Iterate through the width of the canvas
		for (let x = 0; x <= width; x += RIDGE_STEP) {
			const noisedY = p5.noise(x * zoom, y)
			p5.vertex(x, y - noisedY * amp)
		}
		p5.vertex(width, height)
		p5.vertex(0, height)
		p5.endShape(p5.CLOSE)
		p5.fill(SNOW_COLOR)
	}

	const windowResized = (p5) => {
		width = window.innerWidth
		height = window.innerHeight
		p5.resizeCanvas(width, height)
	}

	const mousePressed = (p5) => {
		// Check if mouse is inside the circle
		let d = p5.dist(
			p5.mouseX,
			p5.mouseY,
			width / 2,
			Math.round(height * SKY_SPACE) - RIDGE_AMP / 2
		)
		if (d < SUN_RADIUS) {
			setState(!state)
		}
	}

	const updateSnowflake = (snowflake, p5) => {
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
			mousePressed={mousePressed}
			role='img'
		/>
	)
}

export default memo(Background)
