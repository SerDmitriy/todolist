import React from 'react';
import TodosContainer from './TodosContainer/TodosContainer';
import './App.scss';


function App() {
  return (
    <div>
      <h1>todos</h1>
      <TodosContainer />
      <div>
        <div>Double-click to edit a todo</div>
        <div>Created by petehunt</div>
        <div>Part of TodoMVC</div>
      </div>
    </div>
  );
}

export default App;
