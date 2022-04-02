import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/TodoList';

function App() {

  const [inputText,setInputText] = useState("");
  const [toDos,setToDos] = useState([]);
  const [status,setStatus] = useState("All");
  const [FilteredTodos,setFilteredTodos] = useState([]);
  
  useEffect(()=>
  {
     getlocalStorage();
  },[]);

  //Use Effect
  useEffect(()=>
  {
    filterHandler();
    savelocalStorage();

  },[toDos,status]);

  const filterHandler = () =>
  {
    switch(status)
    {
      case "completed" : setFilteredTodos(toDos.filter(item=>item.completed === true))
                         break;
      case "uncompleted" : setFilteredTodos(toDos.filter(item=>item.completed === false))
                           break;
      default : setFilteredTodos(toDos);
                break;
    }

  }

  const savelocalStorage = () =>
  {
     localStorage.setItem("toDos",JSON.stringify(toDos));
     
  }

  const getlocalStorage = () =>
  {
     if(localStorage.getItem("toDos")===null)
     localStorage.setItem("toDos",[]);
      
     else
     setToDos(JSON.parse(localStorage.getItem("toDos")));
  }

  

  return (
    <div className="App">
      <header>Ladli's TO DO List</header>
     
     <Form inputText = {inputText} setInputText = {setInputText} 
     toDos = {toDos} setToDos = {setToDos} setStatus = {setStatus}/>

     <ToDoList toDos = {toDos} setToDos = {setToDos} FilteredTodos = {FilteredTodos}/>
        
    </div>
  );
}

export default App;
