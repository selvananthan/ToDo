import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleStatus, editTodo, deleteTodo }) => {
  return (
    <div className="row">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleStatus={toggleStatus}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
