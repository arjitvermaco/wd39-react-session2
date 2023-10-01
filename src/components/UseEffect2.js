import React, { useEffect, useState } from 'react'

export default function App() {
  // const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [loggedIn,setLoggedIn] = useState(false)

  // useEffect(()=>{

  //   const handleResize = ()=>{
  //     console.log("Window size has changed")
  //     setWindowWidth(window.innerWidth)
  //   }

  //   window.addEventListener('resize',handleResize)

  //   //Return the cleanup Function
  //   return ()=>{
  //     //Remove the event listners when the component is unmounted 
  //     window.removeEventListener('resize',handleResize)
  //   }

  // },[])

  let render = loggedIn? <LoggedIn/>:<LoggedOut/>
  
  return (
    <div>
      {/* <p>The current window width is : {windowWidth} px</p> */}

      {render}

      <button onClick={()=>{setLoggedIn(!loggedIn)}}>Change Login Status</button>
    </div>
  )
}


function LoggedIn(){
  useEffect(()=>{
    console.log("Logged In Component has loaded")

    return ()=>{
      console.log("Loggedin component is removed ")
    }
  },[])
  return(
    <h1>User is logged In ... </h1>
  )
}


function LoggedOut(){
  useEffect(()=>{
    console.log("Logged OUT Component has loaded");

    return ()=>{
      console.log("Logged OUT component is removed ")
    }
  },[])
  return(
    <h1>User is NOT Logged IN  </h1>
  )
}