import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    
      <>
      <Header/>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
      </>
  )
}

export default MyApp
