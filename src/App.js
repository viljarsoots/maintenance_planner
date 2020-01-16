import React from 'react';
import './App.css';
import MasterLayout from './components/pages/MasterLayout';
import { BrowserRouter, HashRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <MasterLayout />
    </BrowserRouter>
  )
}

export default App;
