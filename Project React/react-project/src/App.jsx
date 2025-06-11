import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentItem2 from "./component/StudentItem2"
import StudentSimple from "./component/StudentSimple"
import NewStudentItem from './component/NewStudentItem'
function App() {
  const StudentList= [
    {name : "Cream", surname : "Nice" , age :22},
    {name : "Nat" , surname : "Bonus", age :21},
    {name :"Namp" , surname : "Lilly" , age :23},
    {name : "knot", surname : "Balloon", age:24},
  ]
  const [status, setStatus] = useState("Avalible")
  const clickHandler = () => {
    setStatus("Busy")
    console.log("status",status )
  }
  const addStudentHandle = (newStudent) => {
    const newStudentItem = {
      ...newStudent,
      id: Math.random().toString(),
    }
    console.log(newStudentItem)
  }

  return(
    <div className="App">
      <h1>Vite + React</h1>
      <NewStudentItem onAddStudent = {addStudentHandle}/>
      <StudentItem2 name = {StudentList[0].name} surname = {StudentList[0].surname} age = {StudentList[0].age}/>
      <StudentItem2 name = {StudentList[1].name} surname = {StudentList[1].surname} age = {StudentList[1].age}/>
      <StudentItem2 name = {StudentList[2].name} surname = {StudentList[2].surname} age = {StudentList[2].age}/>
      <StudentItem2 name = {StudentList[3].name} surname = {StudentList[3].surname} age = {StudentList[3].age}/>
      <h3>Status: {status}</h3>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default App
