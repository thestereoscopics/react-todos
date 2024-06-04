import { useState } from 'react'
import SearchInput from './components/SearchInput.jsx'
import ListItems from './components/ListItems.jsx'

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function searchTodoList(value) {
    let searchGroup = [];
    let newTodoList = [...todoList]
    todoList.map((todo, i) => {
      if (value && todo.todoName.includes(value)) {
        searchGroup.push(todo);
        newTodoList[i].insearch = +true 
      } else {
        newTodoList[i].insearch = +false
      }
    })
    setTodoList(newTodoList);
  }

  function updateTodo(todoID, isComplete){
    let todoPos = '';
    todoList.map((todo, i) => {
      if (todo.listitemid === todoID) {
        todoPos = i;
      }
    })

    let newTodoList = [...todoList];
    console.log(newTodoList[todoPos].completed, +isComplete);
    newTodoList[todoPos].completed = +isComplete
    setTodoList(newTodoList);
  }

  function triggerAddTodo(todoName) {
    let newTodoItem = [...todoList, {insearch: +false, completed: +false, listitemid: Date.now(), todoName: todoName}];
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
    <div className='flex flex-col'>
      <h1 className='mb-4'>Just To Do It!</h1>
      <SearchInput searchTodoList={searchTodoList}/>
      <ListItems triggerDeleteTodo={triggerDeleteTodo} todoList={todoList} updateTodo={updateTodo} triggerAddTodo={triggerAddTodo}/>
    </div>
  )
}