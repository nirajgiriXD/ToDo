import React from "react";
import { useState } from "react";
import SingleList from "./SingleList";

function ToDo() {
  const [toDoListArr, setToDoList] = useState([
    {
      id: 1,
      title: "Learn REACT",
    },
  ]);

  const [toDoNewTask, setToDoNewTask] = useState("");

  function handleInputChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setToDoNewTask(event.target.value);
  }

  function removeTask(id: Number) {
    const newArr = toDoListArr.filter((item) => item.id !== id);
    setToDoList([...newArr]);
  }

  const heading = "ToDo App";
  const btnTitle = "Add Task";
  const addTaskMsg = "Add new tasks";
  return (
    <>
      <div className="container">
        {/* Heading */}
        <p className="todo-heading">{heading}</p>

        {/* Lists */}
        <div className="todolist-container">
          {toDoListArr.map((item) => (
            <SingleList key={item.id} todo={item} removeTask={removeTask} />
          ))}
        </div>

        {/* Add Task */}
        <div className="todo-addlist-container">
          <input
            type="text"
            className="todo-addlist-title"
            placeholder={addTaskMsg}
            id="todo-newlist"
            onChange={handleInputChange}
            value={toDoNewTask}
            onKeyDown={(event) => {
              if ("Enter" === event.key && "" !== toDoNewTask) {
                setToDoList([
                  ...toDoListArr,
                  {
                    id: Math.max(...toDoListArr.map((item) => item.id), 0) + 1,
                    title: toDoNewTask,
                  },
                ]);
                setToDoNewTask("");
              }
            }}
          />
          <button
            type="submit"
            className="todo-addlist-btn"
            onClick={() => {
              if ("" !== toDoNewTask) {
                setToDoList([
                  ...toDoListArr,
                  {
                    id: Math.max(...toDoListArr.map((item) => item.id), 0) + 1,
                    title: toDoNewTask,
                  },
                ]);
                setToDoNewTask("");
              }
            }}
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDo;
