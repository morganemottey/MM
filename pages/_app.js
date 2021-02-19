import '../styles/globals.scss'
import '../styles/about.scss'
import '../styles/card.scss'
import '../styles/contact.scss'
import '../styles/experiences.scss'
import '../styles/animation.scss'
import '../styles/projects.scss'
import '../styles/hobbies.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>  )
}

export default MyApp  
