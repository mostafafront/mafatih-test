import Link from 'next/link'
import React, { useState } from 'react'
import Child2 from './child2'

export default function index(props) {

    const [name, setName] = useState("mostafa")

  return (
    <>
    <h1>Parent page</h1>
    <br/>
    <h2>and my name is: {name}</h2>
    <br/>
<Child2  name={name} />
    <div>
    <Link href={"/parent/child1"}>first child</Link>
    </div>
    <div>
    <Link href={"/parent/child2"}>second child</Link>
    </div>
    </>
  )
}
