import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NewTodoTask from "./components/NewTodoTask/NewTodoTask";
import TodoList from "./components/TodoList/TodoList";

let count = 4;

function uniqueId() {
  count = count + 1;
  return count;
}
const intitial= [
  {
    id: 1,
    task: "Read a book",
    dueDate: new Date("2023-02-28"),
    isFinished: false,
  },
  {
    id: 2,
    task: "Buy dog food",
    dueDate: new Date("2024-06-14"),
    isFinished: true,
  },
  {
    id: 3,
    task: "Go to cinema",
    dueDate: new Date("2023-05-20"),
    isFinished: true,
  },
  {
    id: 4,
    task: "Print homework",
    dueDate: new Date("2024-07-26"),
    isFinished: true,
  },
];

function App() {
  const [todoList,setTodolist] = useState(intitial);
  const [curYaer,setCurYear] = useState("2023");
  const [isshow,setIsshow] = useState(false);
  const addNewTodo = (newTodo) => {

    const newTodoItem = {
      ...newTodo,
      id: uniqueId(),
    }
    setTodolist([...todoList,newTodoItem])
  }
  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((e) => e.id !== id);
    setTodolist(newTodoList);
  }
  const editHandler = (id, todo) => {
    const newTodoList = [...todoList];

    const index = todoList.findIndex( e => e.id === id);
    newTodoList[index] = {todo};

    setTodolist(newTodoList);
  }

  return (
    <div className="App">
      <Header value={curYaer} onChange={e => setCurYear(e.target.value)} />
      {isshow ? (<NewTodoTask setIsshow={setIsshow} addNewTodo={addNewTodo}/>) :( <div style={{marginTop: "10px"}}><button onClick={() =>setIsshow(true)} >Add new Todo</button></div>)}\
      <TodoList editHandler = {editHandler} deleteHandler={ deleteHandler} currentYaer={curYaer} todoList={todoList} />
    </div>
  );
}

export default App;
