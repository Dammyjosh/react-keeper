import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>


      <button onClick={handleClick}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Note;
