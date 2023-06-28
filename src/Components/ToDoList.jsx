import React, { useState } from 'react'
import style from "./todo.module.css"
function ToDoList() {
    const [todos,setTodos]=useState([]);
    const [newtodo,setNewTodo]=useState("");
    const handleAddToDo=()=>{
        if(newtodo.trim()!==''){
            setTodos([...todos, newtodo])
            setNewTodo('')
        }
    }
    const deleteToDo=(index)=>{
        const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    }
  return (
    <div className={style.todolist}>
         <input type="text" value={newtodo} onChange={(e)=>{setNewTodo(e.target.value)}} />
     <button onClick={handleAddToDo}>add to do</button>
     {todos.map((todo,index)=>(
 <div key={index} className={style.todoitem} >
    <input type="checkbox" checked={todo.completed} />
    <span className={todo.completed ? 'completed':''}>{todo} </span>
 <button onClick={()=>{deleteToDo(index)}}>delete</button></div>
     ))}

    
    </div>
  )
}

export default ToDoList
