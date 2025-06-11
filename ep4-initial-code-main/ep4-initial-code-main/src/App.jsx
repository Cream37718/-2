import { useState } from "react";
import "./App.css";
import NewStudentItem from "./components/NewStudentItem/NewStudentItem";
import StudentList from "./components/StudentList/StudentList";

let lastId = 4;
const INTITAIL_STUDENET = [
  { id: 1, name: "Samuel", surname: "Jackson", age: 73, bType: "O" },
  { id: 2, name: "Keanu", surname: "Reeves", age: 58, bType: "A" },
  { id: 3, name: "Tom", surname: "Cruise", age: 60, bType: "AB" },
  { id: 4, name: "Johnny", surname: "Depp", age: 59, bType: "A" },
];


function App() {
 
  const [status, setStatus] = useState("Available");
  const [studentList,setstudentList] = useState (INTITAIL_STUDENET);
  const [isshow,setisshow] = useState(false);

  const clickEventHandler = () => {
    setStatus("Busy");
    console.log("status: ", status);
  };

  const addStudentHandler = (newStudentData) => {
    const newStudent = {
      ...newStudentData,
      id: ++lastId,
    };
    setstudentList(prevList => [newStudent, ...prevList]);
  };
  const deleteHandler = (id) => {
    const newStudentList = studentList.filter( e => e.id !== id)
    setstudentList(newStudentList);
  };
  const editHandler = (id, student) => {
    const newStudentList = [...studentList];

    const idx = studentList.findIndex((e) => e.id === id );
    newStudentList[idx] = {...student};

    setstudentList(newStudentList);

  };
  return (
    <div className="App">
      {isshow ? (
        <NewStudentItem setisshow={setisshow} onAddStudent={addStudentHandler}/>
      ) : (
      <div className="add-button-container">
        <button onClick={() => setisshow(true)}>Add New Student</button>
      </div>
      )}
      <StudentList editHandler={editHandler} deleteHandler={deleteHandler} studentList={studentList}/>
      <h3>Status: {status}</h3>
      <button onClick={clickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
