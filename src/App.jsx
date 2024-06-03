import { useState } from 'react'
import SearchInput from './components/SearchInput.jsx'
import ListItems from './components/ListItems.jsx'

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function searchTodoList(value) {
    todoList.map((todo, i) => {
      if (todo.listitemid === todoID) {
        todoPos = i;
      }
    })
  }

  function triggerAddTodo(todoName) {
    let newTodoItem = [...todoList, {completed: +false, listitemid: Date.now(), todoName: todoName}];
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