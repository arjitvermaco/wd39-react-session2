import React from 'react'

export default function ChildComponent({handleDataFromChild}) {

   const handleChange = (event)=>{
    handleDataFromChild(event.target.value)
   } 
  return (
    <div>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}
