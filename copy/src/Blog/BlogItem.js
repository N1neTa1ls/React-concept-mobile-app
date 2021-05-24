import React from 'react'


export default function BlogList ({notes}) {

  return (
    <div className="output">
    {notes.map(item => (
      <div key={item.id}>{item.title}</div>
    ))}
  </div>
  )
}