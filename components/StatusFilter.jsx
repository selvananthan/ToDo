import React from 'react';

const StatusFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4 d-flex justify-content-end align-items-center">
      <label className="me-2">Status Filter:</label>
      <select
        className="form-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default StatusFilter;
