import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleEditTask = (index) => {
    setEditingTaskIndex(index);
    setInputValue(tasks[index]); 
  };

  const handleSaveTask = (index) => {
    if (inputValue.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = inputValue;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TO-DO_LIST</h1>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div>
        <h2>Tasks:</h2>
        {tasks.map((task, index) => (
          <div key={index}>
            <input type="checkbox" />
            {editingTaskIndex === index ? (
              <input type="text" value={inputValue} onChange={handleInputChange} />
            ) : (
              <span>{task}</span>
            )}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            {editingTaskIndex === index && (
              <button onClick={() => handleSaveTask(index)}>Save</button>
            )}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
