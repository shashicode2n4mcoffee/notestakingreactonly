import React from 'react'
import Note from './Note'

const Importantnotes = ({ notes, checkImp }) => {
  return (
    <div className='importantNotes'>
      {notes
        .filter((note) => note.isImportant === true)
        .map((note) => (
          <Note key={note.id} note={note} checkImp={checkImp} />
        ))}
    </div>
  )
}

export default Importantnotes
