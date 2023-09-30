import React, { useRef } from 'react'
import LoginValidated from './components/LoginValidated';

export default function App() {
  //useRef 
  const inputRef = useRef();

  function handleClick(){
    console.log(inputRef)
    inputRef.current.focus()

    console.log(inputRef.current.value)
  }
  return (
    <div>
      {/* <input ref={inputRef} placeholder="Click the button"/>
      <button onClick={handleClick}>Click Me</button> */}
      <LoginValidated/>
    </div>
  )
}
