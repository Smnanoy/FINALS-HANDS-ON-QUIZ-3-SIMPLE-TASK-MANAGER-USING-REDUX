import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./features/taskSlice";
import "./index.css";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.taskList);

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    dispatch(addTask(task));

    setTask("");
  };

  return (
    <div className="app">
      <div className="container">
        {/* TITLE */}
        <div className="header">
          <h1>TASK MANAGER</h1>
        </div>

        {/* INPUT */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Add task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={handleAddTask}>ADD</button>
        </div>

        {/* TASK AREA */}
        <div className="tasks-wrapper">
          <img src="/icon.png" alt="icon" className="bg-icon" />

          <div className="tasks">
            {tasks.length === 0 ? (
              <div className="task-card">No Task Yet</div>
            ) : (
              tasks.map((item, index) => (
                <div className="task-card" key={index}>
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;