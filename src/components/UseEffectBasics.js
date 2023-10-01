import React, { useEffect, useState } from 'react'
import LoginValidated from './components/LoginValidated';

export default function App() {
  const [name,setName]  = useState("")
  const [year,setYear] = useState(2023)

  // 1. Without any dependency array 
    // When the component is loaded on the DOM 
    // Run On every state change  = > it will run on every component rerender
  useEffect(()=>{
    console.log("Component is rendered and useEffect is running")
  })
   
  // 2.With empty dependency array 
  //Once once when component is rendered for the first time 
  // WILL NOT RUN on state change
  useEffect(()=>{
    console.log("Second useEffect and it will run only once When component is rendered")
    // Make api calls here 
    //Init your states 
    setName("Arjit Verma")
  },[])

  // 3. With states in dependency array 
  // Will run on the component render => component mount
  // IT will run when any state from the dependency array changes
  useEffect(()=>{
    console.log("This is third useEffect . Will run first time and on name state change")
  },[name,year])

  
  return (
    <div>
      {name} <br/> <button onClick={()=>{setName("Rohit")}}>Change Name</button>

      {year} <br/> <button onClick={()=>{setYear(2020)}}>Change Year</button>
    </div>
  )
}

// useEffect 
// Conditional Rendering
// localStorage
// CRUD App - TODO List Application