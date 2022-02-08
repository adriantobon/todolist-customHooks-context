import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Context Provider
import { TodosContextProvider } from './context/todos-context';

ReactDOM.render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
