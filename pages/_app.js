import Meta from '../components/Meta'
import Layout from "../components/Layout"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
	<Layout>
	<>
		<Meta />
		<Component {...pageProps} />
	</>
	</Layout>
)

export default MyApp
