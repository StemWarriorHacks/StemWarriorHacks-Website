import Meta from '../components/Meta'
import 'tailwindcss/tailwind.css'
import '../utils/styles.css'

const MyApp = ({ Component, pageProps }) => (
	<>
		<Meta />
		<Component {...pageProps} />
	</>
)

export default MyApp
