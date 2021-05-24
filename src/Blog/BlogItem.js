import React from 'react'
import './blogStyle.css';

export default function BlogItem ({notes}) {

  return (
    <div className="output">
    {notes.map(item => (
      <div className="animation" key={item.id}>
        {item.title}
      </div>
    ))}
  </div>
  )
}