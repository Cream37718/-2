import React from "react";
import { useState } from "react";
import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;
  const [curBType, setcurBType] = useState("A");
  const filterStudents = studentList.filter(s => s.bType === curBType);

  let contentList = <div> Not Found </div>

  if(filterStudents.length >0){
    contentList = filterStudents.map( (e) => (
      <StudentItem
        editHandler={props.editHandler}
        deleteHandler={props.deleteHandler}
        id = {e.id}
        key = {e.id}
        name = {e.name}
        surname = {e.surname}
        age = {e.age}
        bType = {e.bType}
      />
    ))
  }

  return (
    <>
      <div className="selectdiv">
        <label>
          <select value={curBType} onChange={e => setcurBType(e.target.value)}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
        </label>
      </div>
      <div>{contentList}</div>
      <hr/>
    </>
  );
}
export default StudentList;
