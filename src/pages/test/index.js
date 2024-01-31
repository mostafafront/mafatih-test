import React from 'react'


export default function Test({dataDoa}) {

  // const fs = require('fs').promises;
  // const data = JSON.parse(fs.readFile(process.cwd() + '/src/pages/api/data.json', 'utf-8'))

  // console.log(data)
  return (
    <>
    <p>{dataDoa.title}</p>
    
    <br/>
    <p>{dataDoa.items.body}</p>
    </>
  )
}
