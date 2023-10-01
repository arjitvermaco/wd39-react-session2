import React, { useEffect, useState } from 'react'

export default function App() {

  //All Todos
  // new Todo

  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState('')

  useEffect(()=>{
    // //Save to data to localstorage
    // // localStorage.setItem('name',"Arjit Verma");
    // // localStorage.setItem('users',JSON.stringify(["user1","user2","user3"]))

    // //Get data from localstorage
    // let name = localStorage.getItem('name');
    // console.log(name)

    // let users = localStorage.getItem('users');
    // console.log(users)
    // console.log(JSON.parse(users));

    // localStorage.removeItem('name')
  },[])

  return (
    <div>App</div>
  )
}
