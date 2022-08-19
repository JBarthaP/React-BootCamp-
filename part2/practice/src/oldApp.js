import './App.css';
import { Note } from './Note.js';
import { useState } from 'react';


function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNotes] = useState('')
  const [showAll, setShowAll] = useState(true)
  /*
  --Keys

  When we iterate through a list of objects React normally uses keys for 
  improving the performance of the application. The key usually is 
  an unique identificator an is a good practice not to use random numbers
  or index because it can give React problems. 

  Index fail to this task because if you delete an object of the
  list the index is out of phase so is not longer a good reference
  But if you know that the list is immutable, you could use it´
  to use it map(note,index) => ...
  

  --Inputs and forms
  In the event of an input if you search for the value in the target prop 
  you ll find the text in the input
  
  Using forms make us to change the way we where handling the events of the button.
  By default the last button of a form works as a submit event.
  If we want to change this behaviour we add in the button tag
  the prop type with button,  overriding the effect of the form
  */

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("crear nota")
    const noteToAddToState = {
    id: notes.length + 1,
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() < 0.5
    }
    console.log(noteToAddToState)
    
    //setNotes([...notes,noteToAddToState])
    setNotes(notes.concat(noteToAddToState))
    setNewNotes('')
  }
  const handleChange = (event) => {
    setNewNotes(event.target.value)
    
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }

  /*
  Remember to use the key in the place where you iterate not on the component
  */
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}> {showAll ? 'Show only important' : 'Show all'}</button>
      <ul>
        {notes.filter((note) => {
          if(showAll === true) return true;
          return note.important === true
        }).map((note) => <Note key={note.id} content={note.content} date={note.date}></Note>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}></input>
        <button>Crear nota</button>
      </form>
    </div>

  )

}

export default App;