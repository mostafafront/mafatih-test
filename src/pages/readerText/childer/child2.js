import React, { useContext } from 'react'
import Link from 'next/link'
import { nameContext } from '../../../../context/nameContext'
import { valueContext } from '../../../../context/valueContext'

export default function Child2() {
    
    const {name, setName} = useContext(nameContext)
    const {value, setValue} = useContext(valueContext)

  return (
    <>
    <h1>{name}</h1>
    <input onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => setName(value)}>click on me</button>
    <Link href={"/readerText"}>home</Link>

    </>
  )
}
