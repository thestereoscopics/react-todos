import { useState } from "react";

export default function AddTodo({addTodo}) {
    const [todoValue, setTodoValue] = useState('');

    function handleChange(e) {
        setTodoValue(e.target.value)
    }

    function handleClick() {
        if (todoValue) {
            addTodo(todoValue);
            setTodoValue('')
        }
    }

    function checkKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleClick()
        }
    }

    return (
        <form className="max-w-full flex"> 
            <input className="flex-auto" type="text" onKeyDown={(e) => checkKeyDown(e)} onChange={ handleChange } value={todoValue} placeholder="EX: Get a job"/>
            <button onClick={handleClick} type="button">Add Todo!</button>
        </form>
    )
}