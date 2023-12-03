import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import '@/styles/globals.css'
import HeaderComponent from '../../components/header'
import { useEffect } from 'react'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; //میتونه نباشه

export default function App({ Component, pageProps }) {


  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  },[])
 
  useEffect(() => {
    require('jquery/dist/jquery')
  },[])
  useEffect(() => {
    require('owl.carousel/dist/owl.carousel')
  },[])

  



  return(
    <>
    <HeaderComponent/>
    <Component {...pageProps} />
    </>
  ) 
}
