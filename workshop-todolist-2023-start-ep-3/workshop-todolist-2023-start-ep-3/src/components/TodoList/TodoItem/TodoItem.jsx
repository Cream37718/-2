import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const [isEdit,setisEdit] = useState(false);
  const [curTask,setcurTask] = useState("");
  const [curDate,setcurDate] = useState("");
  const task = props.task;
  const dueDate = props.dueDate;
  const date = dueDate.getDate();
  const month = dueDate.getMonth();
  const year = dueDate.getFullYear();
  const [checkbox,setcheckbox] = useState(props.isFinished);

  const resolveDueDate = (date, month, year) => {
    let convertedDate, convertedMonth;

    if(String(date).length === 1){
      convertedDate = "0" + date;
    } else{
      convertedDate = date;
    }
    if(String(month).length === 1){
      convertedMonth = "0" + month;
    }else{
      convertedMonth = month;
    }
    
    return `${year}-${convertedMonth}-${convertedDate}`;
  };
  const onClickedit = () => {
    setisEdit(true);
    setcurTask(props.task);
    const dateToset =resolveDueDate(date,month,year);
    setcurDate(dateToset);
  };
  const onClickDone = () => {
    const editVaiue = {
      task: curTask,
      dueDate: curDate,
      isFinished: checkbox
    }
    setisEdit(false);
    props.editHandler(props.id , editVaiue);
  }
  if(isEdit){
    return (
      <div className="form-control">
        <div className="cb-container">
          <input checked={checkbox} onChange={(e) => setcheckbox(e.target.checked)} type="checkbox" />
        </div>
        <div  className="tn-container"><input value={curTask} onChange={ e => setcurTask(e.target.value)}/></div>
        <div className="dd-container">
          <input value={curDate} onChange={(e)=> setcurDate(e.target.value)} type="date"/>
        </div>
        <div className="ed-container">
          <button onClick={onClickDone} >Done</button>
        </div>
        <div className="dl-container">
          <button onClick={() => setisEdit(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-control">
      <div className="cb-container">
        <input checked={checkbox} onChange={e => setcheckbox(e.target.checked)} type="checkbox" />
      </div>
      <div className="tn-container">{task}</div>
      <div className="dd-container">
        {date}/{month}/{year}
      </div>
      <div className="ed-container">
        <button onClick={() => setisEdit(true)} >Edit</button>
      </div>
      <div className="dl-container">
        <button onClick={onClickedit} >Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
