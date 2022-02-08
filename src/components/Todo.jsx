import React from 'react';

const Todo = ({todo}) => {
    return (
        <div style={{marginBottom: '14px'}}>
            <span style={{marginRight: '6px'}}>{todo.title}</span>
            <button>Borrar</button>
        </div>
    )
}

export default Todo;
