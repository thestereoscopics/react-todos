import { useState, useEffect } from "react"
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import Checkbox from "./Checkbox";
import EditTodo from "./EditTodo";

export default function ListItems({todoList, addTodo, deleteTodo, updateTodoValue}) {
  const [todoListHTML, setTodoListHTML] = useState([]);

  function populateTodoList() {
    let tempTodoListHTML = [];
    todoList.map(listItem => {
      tempTodoListHTML.push(
        <li className={"flex items-center max-w-full gap-4 " + (listItem.insearch === 1 ? 'insearch' : '')} key={listItem.todoid} status={(listItem.completed === 1) ? 'complete' : 'unfinished'} todoid={listItem.todoid}>
          <span className={"w-auto flex-auto items-center left flex gap-4 " + (listItem.completed === 1 ? 'line-through' : 'unfinished') } >
            <Checkbox todoID={listItem.todoid} isEditing={listItem.isEditing} todoName={listItem.todoName} status={listItem.completed} updateTodoValue={updateTodoValue} />
          </span>
          <span className="flex flex-auto gap-4 justify-end">
            <EditTodo todoID={listItem.todoid} updateTodoValue={updateTodoValue}/>
            <DeleteTodo todoID={listItem.todoid} deleteTodo={deleteTodo}/>
          </span>
        </li>
      )
    })
    setTodoListHTML(tempTodoListHTML);
  }

  useEffect(() => {
    populateTodoList()
  },[todoList])

  return (
    <>
      <ul className="mb-4">
        {todoListHTML}
      </ul>
      <AddTodo addTodo={addTodo}/>
    </>
  )
}