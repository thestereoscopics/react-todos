import { useState, useEffect } from "react"
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";

export default function ListItems({todoList, triggerAddTodo, triggerDeleteTodo}) {
  const [todoListHTML, setTodoListHTML] = useState([]);

  function populateTodoList() {
    let tempTodoListHTML = [];
    todoList.map(listItem => {
      tempTodoListHTML.push(
        <li className="grid items-center grid-rows-1 grid-flow-col gap-4" key={listItem.listitemid} status={listItem.completed} listitemid={listItem.listitemid}>
          <span className="w-auto left flex gap-4">
            <input className="w-auto max-w-2" type="checkbox" name={listItem.listitemid} id={listItem.listitemid} />
            <label className="w-auto" htmlFor={listItem.listitemid}>{listItem.listitemid + listItem.itemName}</label>
          </span>
          <span className="grid w-auto">
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
    <ul>
      {todoListHTML}
      <AddTodo triggerAddTodo={triggerAddTodo}/>
    </ul>
  )
}