export default function AddTodo({triggerAddTodo}) {

    return (
        <form action="">
            <input type="text" placeholder="EX: Get a job"/>
            <button onSubmit={triggerAddTodo}>Add New ToDo!</button>
        </form>
    )
}