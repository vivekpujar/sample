import './app.css'
// import { createContext, useReducer, useState ,useCallback, useRef} from 'react'


// const App=()=>{

//   const inputRef=useRef(null);

//   function handleClick(){
//     inputRef.current.value="hi man";
//      inputRef.current.focus();
 
//   }



//   return(
//     <div className='app'>
//          <button onClick={handleClick}>click me</button>
//          <input type='text'  ref={inputRef}/>
         
     
//     </div>
//   )
// }

// export default App


  import React, { useRef } from 'react'
import Useeffhook from './components/Useeffhook'
import Binding from './components/Binding'
  
  function App() {

    
  
    return (
      <div>
          <Binding></Binding>
      </div>
    )
  }
  
  export default App