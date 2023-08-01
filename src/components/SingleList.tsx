import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface toDoTitleProp {
  todo: object;
  removeTask: () => {};
}

function SingleList({ todo, removeTask }: toDoTitleProp) {
  const [toDoOpComplete, setToDoOpComplete] = useState(false);
  const [toDoOpEdit, setToDoOpEdit] = useState(true);
  const { id, title } = todo;
  return (
    <div className="todo-singlelist-container">
      {/* Title */}
      <div className="todo-singlelist-title">
        <input
          type="text"
          defaultValue={title}
          className={toDoOpComplete ? "todo-title complete" : "todo-title"}
          disabled={toDoOpEdit}
          onBlur={() => {
            setToDoOpEdit(true);
          }}
        />
      </div>
      {/* Operations */}
      <div className="todo-singlelist-operations">
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => {
            if (toDoOpComplete) {
              setToDoOpComplete(false);
            } else {
              setToDoOpComplete(true);
            }
          }}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            if (false === toDoOpComplete) {
              setToDoOpEdit(false);
            }
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            removeTask(id);
          }}
        />
      </div>
    </div>
  );
}

export default SingleList;
