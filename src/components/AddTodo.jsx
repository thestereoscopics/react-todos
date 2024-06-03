import { useState } from "react";

export default function AddTodo({triggerAddTodo}) {
    const [todoValue, setTodoValue] = useState('');

    function handleChange(e) {
        setTodoValue(e.target.value)
    }

    function handleClick() {
        if (todoValue) {
            triggerAddTodo(todoValue);
            setTodoValue('')
        }
    }

    return (
        <form>
            <input type="text" onChange={ handleChange } value={todoValue} placeholder="EX: Get a job"/>
            <button onClick={handleClick} type="button">Add Todo!</button>
        </form>
    )
}