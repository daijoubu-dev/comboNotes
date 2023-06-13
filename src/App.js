import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  //STATE OBJECTS
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      header: "Example Note",
      text: "combo here",
      date: "12/06/2023"
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  //END STATE OBJECTS

  //LOAD FROM LOCAL STORAGE
  useEffect(()=> {
    const savedNotes = JSON.parse(
        localStorage.getItem('react-combonotes-app-data')
      );

      if(savedNotes){
        setNotes(savedNotes);
      }
  }, [])
  //////////////////////////

  //SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(
        'react-combonotes-app-data', 
        JSON.stringify(notes)
      );
  }, [notes])
  //////////////////////////


  const addNote = (header, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      header: header,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    // if darkmode then add dark-mode class
    <div className={`${darkMode && 'dark-mode'}`}> 
      <div className="container"> 
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={
            notes.filter((note)=> 
            note.text.toLowerCase().includes(searchText) || note.header.toLowerCase().includes(searchText)
            )
          }
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
    
  )
}

export default App;