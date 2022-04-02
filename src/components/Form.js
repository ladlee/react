import React from "react";

function Form({inputText,setInputText,toDos,setToDos,setStatus})
{
    const inputChangeHandler = (e)=>
    {
        setInputText(e.target.value);
    }

    const submitHandler = (e) =>
    {
        e.preventDefault();
        setToDos([...toDos,{text:inputText,completed:false,id:Math.random()*1000}]);
        setInputText("");
    }

    const statusHandler = (e) =>
    {
        setStatus(e.target.value);
    }

   return (
            <form>
            <input type="text" value = {inputText} onChange={inputChangeHandler} className="todo-input" />
            
            <button className="todo-button" onClick = {submitHandler} type="submit">
            <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">

            <select name="todos" onChange = {statusHandler} className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

            </div>
        </form>

   );
}

export default Form;
