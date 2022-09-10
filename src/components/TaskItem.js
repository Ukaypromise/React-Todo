/* eslint-disable */
import React from "react";
import { FaTimes } from "react-icons/fa";

const TaskItem = ({ task, onDelete, onToggle }) => (
  <div
    className={`task ${task.reminder ? "reminder" : ""}`}
    onDoubleClick={() => onToggle(task.id)}
  >
    <h3>
      {task.text} <FaTimes onClick={() => onDelete(task.id)} />
    </h3>
    <p>{task.day}</p>
  </div>
);

export default TaskItem;
