import Head from 'next/head'
import App from './App'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
        <Head>
          <title>Natalie's blog</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <App/>
    </div>
  )
}
