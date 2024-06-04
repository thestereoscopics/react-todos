import { useState, useEffect } from "react"
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import Checkbox from "./Checkbox";

export default function ListItems({todoList, triggerAddTodo, triggerDeleteTodo, updateTodo}) {
  const [todoListHTML, setTodoListHTML] = useState([]);

  function populateTodoList() {
    let tempTodoListHTML = [];
    todoList.map(listItem => {
      tempTodoListHTML.push(
        <li className={"flex items-center max-w-full gap-4 " + (listItem.insearch === 1 ? 'insearch' : '')} key={listItem.listitemid} status={(listItem.completed === 1) ? 'complete' : 'unfinished'} listitemid={listItem.listitemid}>
          <span className={"w-auto flex-auto left flex gap-4 " + (listItem.completed === 1 ? 'line-through' : 'unfinished') } >
            <Checkbox listitemid={listItem.listitemid} todoName={listItem.todoName} updateTodo={updateTodo}/>
          </span>
          <span className="grid justify-end">
            <DeleteTodo todoID={listItem.listitemid} triggerDeleteTodo={triggerDeleteTodo}/>
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
      <AddTodo triggerAddTodo={triggerAddTodo}/>
    </>
  )
}