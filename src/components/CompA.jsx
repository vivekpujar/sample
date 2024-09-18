import React, { useContext, useEffect, memo } from 'react'
import CompB from './CompB'
import { compEContext } from './CompE'



function CompA({onClick}) {
console.log("child component")
  // useEffect(() => {
  //   console.log('Child component rendered');
  // }, []);

  return (
    <div className='A'>
       <h2>Child Component </h2>
         <button onClick={onClick}>Child button</button>
    </div>
  )
}

export default memo(CompA)


import './app.css'
import { createContext, useReducer, useState ,useCallback} from 'react'
import CompA from './components/CompA'

const App=()=>{
  console.log("app")
  const [count,setCount]=useState(0)

  const handleClick=useCallback(()=>{
    console.log("handleclick")
  },[])

  return(
    <div className='app'>
           <h1>Count in parent {count}</h1>
          <button onClick={()=> setCount(count+1)}>Parent button</button>
          <CompA onClick={handleClick}  ></CompA>
    </div>
  )
}

export default App