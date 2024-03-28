import React, { useState } from 'react'
import './style.css'
import StickyNote from './StickyNote'

const StickyNotes = () => {
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        const newNote = {
            id: Math.floor(Math.random() * 10000) + 1,
            text: '',
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

    return (
        <div className='container'>
            <h1>Sticky Notes App</h1>
            <button className='btn-add' onClick={addNote}>Add Note</button>
            <div className="sticky-note-container">
                {notes.map((note) => (
                    <StickyNote
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        onDelete={deleteNote}
                    />
                ))}
            </div>
        </div>
    )
}

export default StickyNotes