import React, { useContext } from 'react'
import { compEContext } from './CompE';

function CompC() {

    const secondName=useContext(compEContext)

console.log(secondName)
  return (
    <div>
        <h1> my name is {secondName.name}</h1>
        <h1> i m from  {secondName.city}</h1>
        <h2>the count is {secondName.age}</h2>
        <button >Increment</button>
    </div>
  )
}

export default CompC