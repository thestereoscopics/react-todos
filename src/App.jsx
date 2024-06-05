import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput.jsx'
import ListItems from './components/ListItems.jsx'
import TypeSort from './components/TypeSort.jsx'
import TypeSortKey from './components/TypeSortKey.jsx'

export default function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('localTodos')) || []);

  function updateAllTodos(newTodoList) {
    setTodoList(newTodoList)
  }

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
    updateAllTodos(newTodoList);
  }

  function todoCompleteState(todoID, isComplete){
    let todoPos = '';
    todoList.map((todo, i) => {
      if (todo.todoid === todoID) {
        todoPos = i;
      }
    })

    let newTodoList = [...todoList];
    newTodoList[todoPos].completed = +isComplete
    updateAllTodos(newTodoList);
  }

  function todoEditState(todoID, isEditing){
    let todoPos = '';
    todoList.map((todo, i) => {
      if (todo.todoid === todoID) {
        todoPos = i;
      }
    })

    let newTodoList = [...todoList];
    newTodoList[todoPos].isEditing = isEditing
    updateAllTodos(newTodoList);
  }

  function updateTodoName(todoID, todoName){
    let todoPos = '';
    todoList.map((todo, i) => {
      if (todo.todoid === todoID) {
        todoPos = i;
      }
    })

    let newTodoList = [...todoList];
    newTodoList[todoPos].todoName = todoName
    updateAllTodos(newTodoList);
  }

  function addTodo(todoName) {
    let newTodoList = [...todoList, {insearch: +false, completed: +false, isEditing: false, todoid: Date.now(), todoName: todoName}];
    updateAllTodos(newTodoList)
  }

  function deleteTodo(todoID) {
    let todoPos = '';
    todoList.map((todo, i) => {
      if (todo.todoid === todoID) {
        todoPos = i;
      }
    })

    let newTodoList = [...todoList];
    newTodoList.splice(todoPos, 1)
    updateAllTodos(newTodoList);
  }

  function editTodo(todoID) {
    console.log('editTodo ' + todoID)
  }

  useEffect(() => {
    if (todoList !== '') {
      localStorage.setItem('localTodos', JSON.stringify(todoList))
    }
  }, [todoList] )

  return (
    <div className='flex flex-col'>
      <h1 className='mb-4'>Just To Do It!</h1>
      <SearchInput searchTodoList={searchTodoList}/>
      {/* <TypeSort /> */}
      <ListItems deleteTodo={deleteTodo} todoList={todoList} todoCompleteState={todoCompleteState} todoEditState={todoEditState} updateTodoName={updateTodoName} addTodo={addTodo} editTodo={editTodo}/>
      {/* <TypeSortKey /> */}
    </div>
  )
}