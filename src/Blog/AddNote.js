import React, { useState } from 'react'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
    value,
    onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

export default function AddNote({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event){
    event.preventDefault()
    
    if(input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form className="input" onSubmit={submitHandler}>
      <textarea className="textarea" placeholder="Введите текст" {...input.bind} ></textarea>
      <button className="btn" type="submit">Send</button>
    </form>
  )
} 