import { useState, useEffect } from "react"
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";

export default function ListItems({todoList, triggerAddTodo, triggerDeleteTodo}) {
  const [todoListHTML, setTodoListHTML] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState(false);

  function handleChange() {
    const checkVal = (checkboxValue === 'checked') ? false : 'checked'
    console.log('change', checkVal);
    setCheckboxValue(checkVal)
  }

  function populateTodoList() {
    let tempTodoListHTML = [];
    todoList.map(listItem => {
      tempTodoListHTML.push(
        <li className="grid items-center grid-rows-1 grid-flow-col gap-4" key={listItem.listitemid} status={listItem.completed} listitemid={listItem.listitemid}>
          <span className="w-auto left flex gap-4">
            <input className="w-auto max-w-2 cursor-pointer" type="checkbox" onChange={() => handleChange(this)} checked={false} name={listItem.listitemid} id={listItem.listitemid} />
            <label className="w-auto cursor-pointer" htmlFor={listItem.listitemid}>{listItem.todoName}</label>
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
    <>
      <ul>
        {todoListHTML}
      </ul>
      <AddTodo triggerAddTodo={triggerAddTodo}/>
    </>
  )
}