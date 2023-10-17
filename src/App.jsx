/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Landing from './components/pages/landing/Landing';
import Animal from './components/pages/Animal';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Registration';
import Settings from './components/pages/Settings';
import ContributeForm from './components/pages/Contribute';
import Logout from './components/pages/Logout';
import Search from './components/pages/List';
import { Layout } from "./components/Layout";
import AnimalForm from "./components/pages/AnimalForm";
import PlantForm from "./components/pages/PlantForm";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Contribute" element={<ContributeForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/AnimalForm" element={<AnimalForm />} />
        <Route path="/PlantForm" element={<PlantForm />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
