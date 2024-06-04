import { useState } from "react"

export default function Checkbox({listitemid, todoName, updateTodo}) {
    const [isChecked, setIsChecked] = useState(false)

    function handleChange(e) {
        setIsChecked(!isChecked)
        updateTodo(listitemid, !isChecked)
    }

    return (
        <>
            <input className="w-auto max-w-2 cursor-pointer" type="checkbox" onChange={handleChange} checked={isChecked} name={listitemid} id={listitemid} />
            <label className="w-auto cursor-pointer" htmlFor={listitemid}>{todoName}</label>
        </>
)
}
