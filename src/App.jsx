import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import StatusFilter from '../components/StatusFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Office Task - 1', description: 'This is the description for my first task', status: 'Not Completed' },
    { id: 2, name: 'Office Task - 2', description: 'This is the description for my second task', status: 'Completed' },
    { id: 3, name: 'Office Task - 3', description: 'This is the description for my third task', status: 'Not Completed' },
  ]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status: todo.status === 'Completed' ? 'Not Completed' : 'Completed' } : todo
    ));
  };

  const editTodo = (id) => {
    // Edit functionality can be implemented here
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'All' ? true : todo.status === filter
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <StatusFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleStatus={toggleStatus} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
