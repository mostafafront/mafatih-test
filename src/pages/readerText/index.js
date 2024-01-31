import React, { useContext, useState } from 'react'
import { nameContext } from '../../../context/nameContext'
import Link from 'next/link'
export default function ReaderTextPage() {

  const {name} = useContext(nameContext)
  return (
    <>
    <h1>{name}</h1>
    <Link href={"./readerText/childer/child1"}>Child1</Link>
    <Link href={"./readerText/childer/child2"}>child2</Link>
    </>
  )
}
