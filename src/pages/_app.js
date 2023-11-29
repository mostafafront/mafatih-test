import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import HeaderComponent from '../../components/header'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {


  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  },[])



  return(
    <>
    <HeaderComponent/>
    <Component {...pageProps} />
    </>
  ) 
}
