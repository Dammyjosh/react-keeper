import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";



function CreateArea(props) {
 

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
          <input
            type='submit'
            name="title"
            autoFocus
            required
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
           />
        
        <textarea
          type='submit'
          name="content"
          required
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
           /> 
          <button
            type='submit'
                aria-label='Add Item'
                onAdd={() => inputRef.current.focus()}
                onClick={submitNote}
                >
                <FaPlus />
          </button>
      </form>
    </div>
  );
}

export default CreateArea;

