import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";
import { useState } from "react";

function StudentItem(props) {
  let age = props.age;
  const [isedit, setisedit] = useState(false);
  const [curName,setcurName] = useState("");
  const [cursurName,setcursurName] = useState("");
  const [curAge,setcurAge] = useState("");
  const [curBType,setcurBType] = useState("");

  const onClickDone = () => {
    const editValues = {
      name: curName,
      surname: cursurName,
      age: curAge,
      bType: curBType
    };
    props.editHandler(props.id, editValues);
    setisedit(false);
  };
  if (isedit){
    return(
      <div className="StudentItem">
        <input placeholder="Name" className="edit-input" value={curName} onChange={e => setcurName(e.target.value)}/>
        <input placeholder="Surname" className="edit-input" value={cursurName} onChange={e => setcursurName(e.target.value)}/>
        <input placeholder="Age" min = "1" max = "99" step="1" type="number" className="edit-input" value={curAge} onChange={e => setcurAge(e.target.value)}/>
        <select className="edit-select" value={curBType} onChange={e => setcurBType(e.target.value)}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="O">O</option>
          <option value="AB">AB</option>
        </select>
        <button onClick={onClickDone} className="btn btn-success">Done</button>
        <button onClick={() => setisedit(false)} className="btn btn-primary">Cancel</button>
      </div>
    )
  }
  return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{age}</div>
        <StudentTags age={age}/>
        <div>{props.bType}</div>
        <button onClick={() => {
          setisedit(true);
          setcurAge(age);
          setcurName(props.name);
          setcursurName(props.surname);
          setcurBType(props.bType);
        }}
          className="btn btn-warning">
            Edit</button>
        <button onClick={() => props.deleteHandler(props.id)} className="btn btn-danger">Delete</button>
      </div>
  )
}

export default StudentItem;