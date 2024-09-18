import React from 'react'
import CompA from './CompA'
import CompC from './CompC'
import {Myprovider} from './CompE'


function CompB() {
  return (
    <div>
       <CompC ></CompC>
       <Myprovider></Myprovider>
    </div>
  )
}

export default CompB