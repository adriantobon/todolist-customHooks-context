import { createContext } from 'react';
import { useTodos } from '../hooks/useTodos';

export const todosContext = createContext({
    todos: [],
    deleteHandler: () => {},
});

export const TodosContextProvider = ({children}) => {

    const todosHook = useTodos(); // { todos, deleteHandler }

    return (
        <todosContext.Provider value={todosHook}>
            {children}
        </todosContext.Provider>
    )
}