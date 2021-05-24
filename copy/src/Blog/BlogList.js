import React from 'react'
import BlogItem from './BlogItem'
import AddNote from './AddNote'

export default function BlogList() {

  // const [newNote, setNote] = React.useState([
  //   {id:1, title: 'fdgfdgfd'},
  //   {id:2, title: '346534fdgfdgfd'},
  //   {id:3, title: '123dffdgfdgfd'}
  // ])

  const [newNote, setNote] = React.useState([])

  function addNote(title){
    setNote(newNote.concat([{
      title,
      id: Date.now()
    }]))
  }

  return (
    <div>
      <AddNote onCreate={addNote} />
      {newNote.length? (
      <BlogItem notes={newNote} />
      ) : (
      <p>Нет записей</p>
      )}
    </div>
  )
}