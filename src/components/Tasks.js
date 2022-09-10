/* eslint-disable */
import React from "react";
import TaskItem from "./TaskItem";

const Task = ({ tasks, onDelete, onToggle }) => (
  <>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </>
);

export default Task;
