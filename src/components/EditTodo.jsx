export default function EditTodo({todoID, updateTodoValue}) {

    function handleClick() {
        updateTodoValue(todoID, 'isEditing', true)
    }

    return (
        <button className="edit w-auto" onClick={handleClick}>Edit</button>
    )
}