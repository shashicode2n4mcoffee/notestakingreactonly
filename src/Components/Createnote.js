import React from 'react'
import { useState } from 'react'

const Createnote = ({ createNote }) => {
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      note,
      id: new Date().getTime(),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    }
    createNote(data)
    // console.log(data)
    setNote('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <textarea
            cols='3'
            className='form-control'
            placeholder='Write your note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className='btn' type='submit'>
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

export default Createnote
