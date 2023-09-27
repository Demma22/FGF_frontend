/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Landing from './components/pages/landing/Landing';
import Animal from './components/pages/Animal';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/animal" element={<Animal />} />
        


      </Routes>
    </BrowserRouter>
  )
}

export default App
