import React, { useContext } from 'react';
import { todosContext } from '../context/todos-context';

const Todo = ({todo}) => {

    const { deleteHandler } = useContext(todosContext);

    return (
        <div style={{marginBottom: '14px'}}>
            <span style={{marginRight: '6px'}}>{todo.title}</span>
            <button onClick={() => deleteHandler(todo.id)}>Borrar</button>
        </div>
    )
}

export default Todo;
