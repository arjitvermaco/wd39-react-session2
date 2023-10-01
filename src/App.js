import React, { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(getTasks());
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function getTasks() {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id)=>{
    let updatedTaskList = tasks.filter((task)=> task.id !== id)
    setTasks(updatedTaskList)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            placeholder="New Task"
            className="w-full p-2 border rounded"
          />
          <button
            className="w-full bg-blue-500 text-white p-2 rounded mt-2"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id} className="mb-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 p-2 border rounded"
                    value={task.text}
                    onChange={() => {}}
                  />
                  <button className="ml-2 bg-red-500 text-white p-2 rounded" onClick={()=>{deleteTask(task.id)}}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
