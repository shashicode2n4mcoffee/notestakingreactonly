import React from 'react'

const Note = ({ note, checkImp }) => {
  // console.log(note)
  return (
    <div className='card mb-3'>
      <div className='card-header'>{note.date}</div>
      <div className='card-body'>{note.note}</div>
      <button
        className='btn'
        onClick={() => {
          checkImp(note.id)
        }}
      >
        {note.isImportant ? 'Remove Note' : 'Add Note'}
      </button>
    </div>
  )
}

export default Note
