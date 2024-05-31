export default function DeleteTodo({triggerDeleteTodo, todoID}) {
    return (
        <button className="delete w-auto" onClick={() => triggerDeleteTodo(todoID)}>Delete</button>
    )
}