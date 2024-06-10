import { useState } from "react"

export default function Checkbox({todoID, todoName, updateTodoValue, status, isEditing}) {
    const [isChecked, setIsChecked] = useState(status)
    const [todoValue, setTodoValue] = useState(todoName)
    
    function handleChange(e) {
        setIsChecked(!isChecked)
        updateTodoValue(todoID, 'completed', !isChecked)
    }

    function handleBlur() {
        updateTodoValue(todoID, 'todoName', todoValue)
        updateTodoValue(todoID, 'isEditing', false)
    }

    function checkKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleBlur()
        }
    }

    console.log(isEditing);

    return (
        <>
            <input className="w-auto max-w-2 cursor-pointer" type="checkbox" onChange={handleChange} checked={isChecked} name={todoID} id={todoID} />
            {!isEditing && <label className="w-auto cursor-pointer" htmlFor={todoID}>{todoName}</label>}
            {isEditing && <input className="flex-auto" type="text" onKeyDown={(e) => checkKeyDown(e)} onBlur={ handleBlur } value={todoValue} onChange={e => setTodoValue(e.target.value)} placeholder="Enter your Todo!"/>}
        </>
)
}
