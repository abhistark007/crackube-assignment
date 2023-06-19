
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';


function App() {
  const [gridView,setGridView]=useState(true);
  return (
    <div className="app">
      <Navbar/>
      <Header gridView={gridView} setGridView={setGridView}/>
      <MainContent gridView={gridView}/>
    </div>
  );
}

export default App;
