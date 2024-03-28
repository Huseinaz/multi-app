import React, { useState } from 'react'

const StickyNote = ({ id, text, onDelete }) => {
    const [note, setNote] = useState(text);

    const handleTextChange = (event) => {
        setNote(event.target.value);
    }

    return (
        <div className='sticky-note'>
            <textarea value={note} onChange={handleTextChange} placeholder='Enter your note' />
            <button className='btn-delete' onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default StickyNote