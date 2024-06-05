export default function EditTodo({todoID, todoEditState}) {

    function handleClick() {
        todoEditState(todoID, true)
    }

    return (
        <button className="edit w-auto" onClick={handleClick}>Edit</button>
    )
}