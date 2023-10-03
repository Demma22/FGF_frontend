/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Landing from './components/pages/landing/Landing';
import Animal from './components/pages/Animal';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Registration';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        


      </Routes>
    </BrowserRouter>
  )
}

export default App
