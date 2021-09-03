import Meta from '../components/Meta'
import 'tailwindcss/tailwind.css'
import '../utils/styles.css'
import { StateProvider } from '../utils/StateContext'

const MyApp = ({ Component, pageProps }) => (
	<StateProvider>
		<Meta />
		<Component {...pageProps} />
	</StateProvider>
)

export default MyApp
