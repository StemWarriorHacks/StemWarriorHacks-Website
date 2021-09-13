module.exports = {
	name: 'StemWarrior Hacks',
	title:
		'StemWarrior Hacks – An international, student-run, 501(c)(3) non-profit hackathon aiming to inspire young innovators.',
	description:
		'Register today and open your eyes to the depths, diversity, and power of computer science!',
	date: 'November 5, 2021',
	url: 'http://localhost:3000',
	twitter: '@HacksStem',
	img: 'https://stemwarriorhacks.org/logo.png',
	urls: {
		twitter: 'https://twitter.com/HacksStem',
		instagram: 'https://www.instagram.com/stem_warrior_hacks',
		email: 'mailto:contact@stemwarriorhacks.org',
		discord: 'https://discord.gg/zVfstssWhe',
		github: 'https://github.com/StemWarriorHacks',
		youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		devpost: 'https://stemwarriorhacks-winter.devpost.com',
	},
	org: {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'StemWarrior Hacks',
		url: 'https://stemwarriorhacks.org',
		logo: 'https://stemwarriorhacks.org/logo.png',
		sameAs: [
			'https://twitter.com/HacksStem',
			'https://www.instagram.com/stem_warrior_hacks',
			'https://github.com/StemWarriorHacks',
		],
		contactPoint: [
			{
				'@type': 'ContactPoint',
				email: 'contact@stemwarriorhacks.org',
				contactType: 'customer support',
				url: 'https://stemwarriorhacks.org',
			},
		],
	},
	event: {
		'@context': 'http://schema.org/',
		'@type': 'Event',
		name: 'StemWarrior Hacks',
		startDate: '2021-11-05T12:00',
		endDate: '2021-11-08T12:00',
		description:
			'Register today and open your eyes to the depths, diversity, and power of computer science!',
		isAccessibleForFree: true,
		url: 'https://stemwarriorhacks.org',
		image: 'https://stemwarriorhacks.org/logo.png',
		location: {},
		sponsor: {
			'@type': 'Organization',
			name: '',
			url: '',
		},
		offers: {
			'@type': 'Offer',
			name: 'Free Admission',
			url: 'https://stemwarriorhacks.org',
			price: '0',
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
			validFrom: '2021-11-05',
			validThrough: '2021-11-08',
		},
		performer: {
			'@type': 'PerformingGroup',
			name: 'StemWarriorHacks Team',
		},
	},
	tracks: [
		{
			name: 'Beginner Hack',
			description:
				'A beginner to Hackathons, or/and coding? No problem! This track specifically targets beginners who made a valiant effort.',
			image: '/beginner.png',
		},
		{
			name: 'Most Creative Hack',
			description:
				"Even if your project isn't the best, if it's the most innovative, then there will surely be a prize for you!",
			image: '/creative.png',
		},
		{
			name: 'Solo Hack',
			description: "Are you a lone wolf! Don't worry, you still have a chance!",
			image: '/solo.png',
		},
		{
			name: 'Best Hack ',
			description:
				'All projects are naturally submitted for this. May the the best hack win!',
			image: '/best.png',
		},
	],
	leaders: [{ name: '', pronouns: '', contact: '' }],
	sponsors: [
		{
			name: 'Slingshot',
			link: 'https://slingshotahead.com/',
			image: '/IMG_8113.png',
		},
		{
			name: 'Taskade',
			link: 'https://www.taskade.com/',
			image: '/IMG_8114.png',
		},
		{
			name: 'Script Foundation',
			link: 'https://www.scriptindia.org/',
			image: '/IMG_8115.png',
		},
		{
			name: 'Axure',
			link: 'https://www.axure.com/',
			image: '/IMG_8116.png',
		},
		{
			name: 'DigitalOcean',
			link: 'https://www.digitalocean.com/',
			image: '/IMG_8117.png',
		},
		{
			name: 'Inspirit AI',
			link: 'https://www.inspiritai.com/',
			image: '/IMG_8118.png',
		},
		{
			name: 'Wolfram Language',
			link: 'https://www.wolframalpha.com/',
			image: '/IMG_8119.png',
		},
		{
			name: '.xyz',
			link: 'https://gen.xyz/',
			image: '/IMG_8120.png',
		},
	],
	additionalSupport: [
		{
			name: '',
			link: '',
			image: '',
		},
	],
	judges: [
		{
			name: '',
			link: '',
			pronouns: '',
			bio: '',
		},
	],
	schedule: [
		{
			date: 'Fri, November 5',
			events: [
				{
					time: '9:00 AM',
					name: 'Beginning of Day 1',
				},
				{
					time: '4:00 PM',
					name: 'Opening Ceremony',
				},
				{
					time: '6:30 PM',
					name: 'Game Night',
				},
				{
					time: '8:00 PM',
					name: 'End of Day 1',
				},
			],
		},
		{
			date: 'Sat, Novemvber 6',
			events: [
				{
					time: '9:00 AM',
					name: 'Beginning of Day 2',
				},
				{
					time: ' 10:00 AM ',
					name: 'How to get project ideas?',
				},
				{
					time: '12:00 AM',
					name: 'EchoAr',
				},
				{
					time: '1:00 PM',
					name: 'Intro to JavaScript',
				},
				{
					time: '3:00 PM',
					name: 'Begineers C++ ',
				},
				{
					time: '7:00 PM',
					name: 'Intro to Figma',
				},
				{
					time: '8:00 PM',
					name: 'End of Day 2',
				},
			],
		},
		{
			date: 'Sun, November 7',
			events: [
				{
					time: '9:00 AM',
					name: 'Beginning of Day 3',
				},
				{
					time: '10:00 AM',
					name: 'EconHacks Workshop',
				},
				{
					time: '2:00 PM',
					name: 'Guest Speaker',
				},
				{
					time: '4:00 PM',
					name: 'Discord Bots with JavaScript',
				},
				{
					time: '12:00 AM',
					name: 'End of Day 3, and Submission Deadline',
				},
			],
		},
	],
	questions: [
		{
			question: 'What am I supposed to do in this hackathon?',
			answer:
				'You can attend the free workshops we provide, and you can also start making your project which you can submit to some of the several tracks we have available! ',
		},
		{
			question: 'Who can attend?',
			answer:
				'The minimum age requirement is 13. Anybody above can attend, however we would highly encourage high-schooler to try and sign up for this event. ',
		},
		{
			question: 'What is unique about this event?',
			answer:
				'We have expected many scenarios, and have tried our best to deal with each one. The StemWarriorHacks will be a unique experience for you, and you can expect to have a fun time! ',
		},
		{
			question: "What if I don't know any code?",
			answer:
				'No problem! We have several workshops that you can attend to learn the fundamentals of different languages. We will always provide assistance if you need help with your projects. ',
		},
		{
			question: 'Is this online?',
			answer:
				'To make this a learning opportunity for everyone this event had been made online. Anyone can attend, and from anywhere. ',
		},
		{
			question:
				'How about time-zone issues, and communicating with teammates across the world?',
			answer:
				'Since this is an international event, we expected to revceive people from around the world. Our InterHackBot has been setup to make it a much smoother experience.',
		},
		{
			question: "What's the cost?",
			answer:
				'Absolutely none. We want to be able to have a communtiy where people can learn, and experiment with others from around the world for free. ',
		},
		{
			question: 'I want to register!',
			answer:
				"Great, you can sign up through our <a href='https://stemwarriorhacks-winter.devpost.com' target='_blank' rel='noopener noreferrer'>devpost, and later join our discord to hear more updates, find teammates, and ask us any questions!",
		},
		{
			question: 'I have more questions!?',
			answer:
				"Great. You can always ask in our official communication platform (<a href='https://discord.gg/zVfstssWhe' className='text-primary font-semibold'>Discord</a>): Or you can contact us at: <a href='mailto:contact@stemwarriorhack.org' className='text-primary font-semibold'>contact@stemwarriorhack.org</a>",
		},
	],
}
