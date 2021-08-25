import Meta from '../components/Meta'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
	<>
		<Meta />
		<Component {...pageProps} />
	</>
)

export default MyApp
