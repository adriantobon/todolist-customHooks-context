import React, { useState } from 'react';
import TodoList from './components/TodoList';

const todoInit = [
  {
    id: 1,
    title: 'Hacer la tarea',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Pasear al perro',
    isCompleted: false,
  },
]

const App = () => {

  const [todos, setTodos] = useState(todoInit)


  const deleteHandler = (todoId) => {
    console.log('todoId', todoId )
  }

  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default App;

