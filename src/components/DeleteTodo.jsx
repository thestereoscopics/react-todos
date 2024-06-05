export default function DeleteTodo({deleteTodo, todoID}) {
    return (
        <button className="delete w-auto" onClick={() => deleteTodo(todoID)}>Delete</button>
    )
}