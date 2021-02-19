import Head from 'next/head'
import Canvas from '../components/Canvas'
import favico from '../public/favicon.ico'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={favico} type="image/x-icon" />
        <title>Home | M | M</title>
      </Head>
      <Canvas />
    </div>
  )
}
