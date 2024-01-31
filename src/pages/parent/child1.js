import React from 'react'
import getServerSideProps from '../api/doa'

export default function child1(props) {
    console.log(props.dataDoa)
  return (
    <>
    <h1>child 1 page</h1>
    <br/>
    <h2>and my name is: {}</h2>
    <div>{props.dataDoa.map((item) => <li>{item.name}</li>)}</div>
    </>
  )
}
