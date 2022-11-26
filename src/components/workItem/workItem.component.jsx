import React from "react";

export const WorkItem = ({ task, handleRemoveTask, num }) => {
  return (
    <div className="card text-center">
      <div className="card-header">Task</div>
      <div className="card-body">
        <h4 className="card-title">{task}</h4>

        <button
          onClick={() => handleRemoveTask(task, num)}
          className="btn btn-primary"
        >
          Completed!
        </button>
      </div>
    </div>
  );
};
