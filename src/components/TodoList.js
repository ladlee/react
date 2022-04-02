import React from "react";
import ToDo from './ToDo';

function TodoList({toDos,setToDos,FilteredTodos})
{
    console.log("FilteredTodos : ",FilteredTodos);
    return(
    <div className="todo-container">
     <ul className="todo-list">
         {
            FilteredTodos.map((todo) => (<ToDo key = {todo.id} todoItem = {todo} toDos = {toDos} setToDos={setToDos}/>))
         }
         
     </ul>
    </div>   
    );
}


export default TodoList;