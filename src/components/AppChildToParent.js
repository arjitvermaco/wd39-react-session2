import React, { useState } from 'react'
import ChildComponent from './components/ChildComponent'

export default function App() {
  let [childData,setChildData] = useState('');

  const handleDataFromChild = (data)=>{
    setChildData(data);
    console.log("Data from child component is :",data)
  }

  return (
    <div>
      <p>Data from child : {childData}</p>
      <ChildComponent handleDataFromChild={handleDataFromChild}/>
    </div>
  )
}
