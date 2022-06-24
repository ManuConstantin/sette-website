import Layout from '../layout'
import Loader from '../components/Loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    <Loader />
  </Layout>
}

export default MyApp
