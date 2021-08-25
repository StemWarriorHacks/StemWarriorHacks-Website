import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					<span>S</span>tem<span>W</span>arrior <span>Hacks</span>
				</h1>

				<p className={styles.description}>
					An international non-profit student-led online hackathon.
					<br />
					Open your eyes to the depths, diversity, and power of computer
					science!
					<br />
					<code className={styles.code}>November 3rd - 5th, 2021</code>
				</p>

				<div className={styles.grid}>
					<a href='https://www.stemwarriorhacks.org' className={styles.card}>
						<h2>Register &rarr;</h2>
						<p>
							Get started in the amazing journey of hackathon along with other
							warriors.
						</p>
					</a>

					<a href='https://discord.gg/zVfstssWhe' className={styles.card}>
						<h2>Join Discord &rarr;</h2>
						<p>Head over to place where you can meet other warriors!</p>
					</a>

					<a
						href='https://stemwarriorhacks.devpost.com'
						className={styles.card}>
						<h2>Join Devpost &rarr;</h2>
						<p>
							Join our devpost platform for team creation, project submission,
							and sign ups.
						</p>
					</a>

					<a
						href='https://stemwarriorhacks.devpost.com/rules'
						className={styles.card}>
						<h2>More Information &rarr;</h2>
						<p>Learn more about the hackathon.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
