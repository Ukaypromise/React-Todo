import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const task = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(task);
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <Header />
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ("No Tasks To Manage")}
      
    </div>
  );
}

export default App;
