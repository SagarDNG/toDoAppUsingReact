import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="ToDoApp">
        <ToDoList />
      </div>
      <Footer />
    </>
  );
}

export default App
