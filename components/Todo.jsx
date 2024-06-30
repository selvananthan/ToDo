import React from 'react';

const Todo = ({ todo, toggleStatus, editTodo, deleteTodo }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{todo.name}</h5>
          <p className="card-text">{todo.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <select
              className={`form-select ${todo.status === 'Completed' ? 'bg-success text-white' : 'bg-danger text-white'}`}
              value={todo.status}
              onChange={() => toggleStatus(todo.id)}
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
            <div>
              <button className="btn btn-warning me-2" onClick={() => editTodo(todo.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
