import { useState } from 'react'
import SearchInput from './components/SearchInput.jsx'
import ListItems from './components/ListItems.jsx'

export default function App() {
  const [todoList, setTodoList] = useState([{completed: +false, listitemid: Date.now(), itemName: 'Go Golfing'}]);

  function searchTodoList(value) {
    console.log(value);
  }

  function triggerAddTodo() {
    let newTodoItem = [...todoList, {completed: +false, listitemid: Date.now(), itemName: 'Go Golfing'}];
    setTodoList(newTodoItem)
  }

  function triggerDeleteTodo(todoID) {
    let todoPos = '';
    todoList.map((todo, i) => {
      if (todo.listitemid === todoID) {
        todoPos = i;
      }
    })

    let newTodoList = [...todoList];
    newTodoList.splice(todoPos, 1)
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>Just To Do It!</h1>
      <SearchInput searchTodoList={searchTodoList}/>
      <ListItems triggerDeleteTodo={triggerDeleteTodo} todoList={todoList} triggerAddTodo={triggerAddTodo}/>
    </>
  )
}