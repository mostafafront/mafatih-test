import React, { useContext, useState } from 'react'
import { nameContext } from '../../../../context/nameContext'
import Link from 'next/link'
import { valueContext } from '../../../../context/valueContext'

export default function Child1() {

  const {name, setName} = useContext(nameContext)
  const {value, setValue} = useContext(valueContext)

  console.log(typeof value)
  console.log(typeof setValue)
  return (
    <>
    <h1>{name}</h1>
    <input  onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => setName(value)}>click on me</button>
    <Link href={"/readerText"}>home</Link>
    </>
  )
}
