import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {

  const [newNote, setnewNote] = useState([]);

  const addnote = (usernote) => {
    setnewNote((prevdata) => {
      return [...prevdata, usernote]
    })
  }

  const onDelete = (id) => {
    setnewNote((olddata) => 
      olddata.filter((currentdata, index) => {
        return index !== id;
      })
    );
  }
  
  return (
    <>
      <Header />
      <CreateNote note={addnote} />

      <div className='notes'>
        {newNote.map((val, index) => {return (
          <Note key={index} id={index} title={val.title} text={val.text} delete={onDelete}/>
        )})}
      </div>

      <Footer />
    </>
  );
}

export default App;
