import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import '@/styles/globals.css'
import HeaderComponent from '../../components/header'
import { useEffect, useState } from 'react'
import { nameContext } from '../../context/nameContext'
import { valueContext } from '../../context/valueContext'


export default function App({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  },[])


      const [name, setName] = useState("ali")

      const [value, setValue] = useState("")

  return(
    <>
    <nameContext.Provider value={{name, setName}}>
    <HeaderComponent/>
    <valueContext.Provider value={{value, setValue}}>
    <Component {...pageProps} />
    </valueContext.Provider>
    </nameContext.Provider>
    </>
  ) 
}
