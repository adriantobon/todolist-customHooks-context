import React, { useState } from 'react';

export const useTodos = () => {
    
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
    ];

    const [todos, setTodos] = useState(todoInit);

    const deleteHandler = (todoId) => {
        console.log('todoId', todoId )
        setTodos(todos.filter((todo) => todo.id !== todoId))
    }

    return { todos, deleteHandler }
}
