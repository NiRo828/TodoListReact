import React, { useState } from "react";

import { AddWorkItem } from "../addWorkItem/addWorkItem.component";
import { WorkItem } from "../workItem/workItem.component";

import "./styletodoList.css";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = () => {
    if (tasks.length === 0) {
      return <h5>No Tasks Found</h5>;
    } else {
      return tasks.map((card) => {
        console.log(card);
        return (
          <WorkItem
            task={card.task}
            handleRemoveTask={handleRemoveTask}
            num={card.num}
          />
        );
      });
    }
  };
  const handleRemoveTask = (task, num) => {
    let newTasks = tasks.filter(
      (card) => card.task !== task || card.num !== num
    );
    setTasks(newTasks); //
  };

  const addTask = (eventOnClick) => {
    let newTask = { task: eventOnClick, num: tasks.length + 1 };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="todo-list">
      <div className="title">
        <h1>Today Work To Be Done</h1>
      </div>
      <div className="add-work-item">
        <AddWorkItem addTask={addTask} />
      </div>
      <div className="work-items">{handleAddTask()}</div>
    </div>
  );
};
