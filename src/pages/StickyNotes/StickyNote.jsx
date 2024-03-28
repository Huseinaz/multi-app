import React, { useState } from 'react';
import Draggable from 'react-draggable';

const StickyNote = ({ id, text, onDelete }) => {
  const [note, setNote] = useState(text);

  const handleTextChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <Draggable>
      <div className="sticky-note">
        <textarea
          value={note}
          onChange={handleTextChange}
          placeholder="Enter your note"
        />
        <button className='btn-delete' onClick={() => onDelete(id)}>Delete</button>
      </div>
    </Draggable>
  );
};

export default StickyNote;
