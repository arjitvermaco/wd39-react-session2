
import { useState } from 'react';
import './App.css';
import CarComponent from './components/CarComponent';
import StudentsList from './components/StudentsList';
import carData from './data/carData';
function App() {
  
  let [students,setStudents] = useState([
    {
      "name": "John Doe",
      "grade": "A",
      "gender": "Male"
    },
    {
      "name": "Jane Smith",
      "grade": "B",
      "gender": "Female"
    },
    {
      "name": "Michael Johnson",
      "grade": "C",
      "gender": "Male"
    },
    {
      "name": "Emily Brown",
      "grade": "A",
      "gender": "Female"
    },
    {
      "name": "David Wilson",
      "grade": "B",
      "gender": "Male"
    },
    {
      "name": "Sarah Davis",
      "grade": "A",
      "gender": "Female"
    },
    {
      "name": "Robert Anderson",
      "grade": "C",
      "gender": "Male"
    },
    {
      "name": "Jennifer Taylor",
      "grade": "B",
      "gender": "Female"
    },
    {
      "name": "William Martinez",
      "grade": "A",
      "gender": "Male"
    },
    {
      "name": "Jessica Thomas",
      "grade": "C",
      "gender": "Female"
    }
  ])

  let currentYear = 2023;


  // useState Hook 
  // console.log("Component was rendered")
  // let [userName,setUserName] = useState("arjitverma")
  // // let userName = "arjitverma";

  
  // function handleClick(){
  //   // alert("Hey! You clicked a button")
  //   // console.log("Button Was Clicked");
  //   setUserName("arjitvermanew")
  // }
  // handleClick()

  return (
    <>
      <h3 className='text-center text-3xl font-bold mt-8'>Top 10 Super Cars in the world</h3>
      {/* <StudentsList listOfStudents={students} currentYear={currentYear}/> */}
      <main className='flex gap-5 flex-wrap mt-16'>
      {carData.map((car)=><CarComponent key={car.name} car={car}/>)}
      </main>
    </>
  );
}

export default App;
//Event Listeners 
//useState Hook
//Props - sending data from a parent to a child
//rendering a list (Array)