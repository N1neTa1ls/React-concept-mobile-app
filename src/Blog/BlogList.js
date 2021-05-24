import React from 'react'
import BlogItem from './BlogItem'
import AddNote from './AddNote'

export default function BlogList() {

  const [newNote, setNote] = React.useState([]);

  function addNote(title) {
    setNote(newNote.concat([{
      title,
      id: Date.now(),
    }]));
  }

  return (
    <div className="view">
      <AddNote onCreate={addNote} />
      {newNote.length ? (
        <BlogItem notes={newNote} />
      ) : (
        <p className="empty">Нет записей</p>
      )}
    </div>
  )
}