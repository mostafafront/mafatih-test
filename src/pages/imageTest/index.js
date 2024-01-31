import Image from 'next/image'
import React from 'react'

import logo from '../../../public/images/logo.png'
import darkTheme from '../../../public/images/darkTheme.png'

import link from '../../../jsonApi/link.json'

export default function ImageTest() {

  return (
    <>


    <p dangerouslySetInnerHTML={{__html: link.body}}></p>
    <div className='box'>
        <Image src={'/images/imam-hossein.jpg'} alt='logo' fill objectFit='cover' priority/>
    </div>
    <div>
        <Image src={logo} alt='logo' sizes="(max-width: 768px) 100px, (max-width: 1200px) 100vw, 33vw" />
    </div> 
    <div>
        <Image src={logo} alt='logo' width={120} quality={100}/>
    </div>
    <div>
        <Image src={darkTheme} alt='logo' width={222} height={160}/>
    </div>
    <div>
        <img src={'/images/darkTheme.png'} alt='logo'  width={222} height={160}/>
    </div>
    </>
  )
}
