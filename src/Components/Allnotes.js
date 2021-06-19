import React from 'react'
import Note from './Note'

const Allnotes = ({ notes, checkImp }) => {
  return (
    <>
      <h5>All Notes</h5>
      <div className='my-3 allnotes '>
        {notes
          .filter((note) => note.isImportant === false)
          .map((note) => {
            return <Note key={note.id} note={note} checkImp={checkImp} />
          })}
      </div>
    </>
  )
}

export default Allnotes
