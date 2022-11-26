import React, { useState } from "react";

export const AddWorkItem = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const handleTask = (actionOnCHange) => {
    setNewTask(actionOnCHange.target.value);
  };
  const handlePlaceHolderInput = () => {
    document.getElementsByTagName("input")[0].value = "";
  };
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Add New Task"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={handleTask}
      />
      <button
        onClick={() => {
          addTask(newTask);
          handlePlaceHolderInput();
        }}
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Add Task
      </button>
    </div>
  );
};
