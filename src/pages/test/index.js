import React from 'react'

import data from '../api/data'

export default function Test() {

  // const fs = require('fs').promises;
  // const data = JSON.parse(fs.readFile(process.cwd() + '/src/pages/api/data.json', 'utf-8'))

  // console.log(data)
  return (
    <>
    {data.title}
    <br/>
    </>
  )
}
