import React from "react";

function ToDo({todoItem,setToDos,toDos})
{
    const deleteHandler = function()
    {
        setToDos(toDos.filter((item)=> item.id !== todoItem.id))
    }

    const completeHandler = function()
    {
        setToDos(toDos.map((item)=>
        {
            if(item.id === todoItem.id)
            {
                item.completed = !item.completed;
            }
            return item;
        }))

    

    }
    return(

        <div className = "todo">
            <li className={`todo-item ${todoItem.completed?"completed":''}`}>{todoItem.text}</li>
            
            <button className="complete-btn" onClick={completeHandler}> 
               <i className = "fas fa-check"></i>
             </button>

            <button className="trash-btn" onClick={deleteHandler}>
                 <i className = "fas fa-trash"></i> 
            </button>
            
        </div>

    );
}

export default ToDo;