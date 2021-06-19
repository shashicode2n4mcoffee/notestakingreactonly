import React from 'react'
import { useState } from 'react'
import Allnotes from './Components/Allnotes'
import Createnote from './Components/Createnote'
import Importantnotes from './Components/Importantnotes'

const App = () => {
  const [notes, setNotes] = useState([])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const checkImp = (id) => {
    const newNotes = notes.slice()
    const index = newNotes.findIndex((note) => note.id === id)

    const note = newNotes[index]
    const newNote = {
      ...note,
      isImportant: !note.isImportant,
    }

    newNotes[index] = newNote

    setNotes(newNotes)
  }

  console.log(notes)

  return (
    <div className='container m-3 p-3'>
      <h5 className='card-header top'> Notes Taking Application</h5>
      <Createnote createNote={createNote} />
      <hr />
      <Importantnotes notes={notes} checkImp={checkImp} />
      <hr />
      <Allnotes notes={notes} checkImp={checkImp} />
    </div>
  )
}

export default App
