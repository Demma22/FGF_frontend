/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Landing from './components/pages/landing/Landing';
import Animal from './components/pages/Animal';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Registration';
import Settings from './components/pages/Settings';

import Logout from './components/pages/Logout';
import Search from './components/pages/List';
import { Layout } from "./components/Layout";
import AnimalForm from "./components/pages/AnimalForm";
import CreatePlant from "./components/pages/CreatePlant";
import Contributor from "./components/pages/Contributors";
import ListPlant from "./components/pages/ListPlant";
import CultureForm from "./components/pages/CultureForm";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Settings" element={<Settings />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/AnimalForm" element={<AnimalForm />} />
        <Route path="/CreatePlant" element={<CreatePlant />} />
        <Route path="/ListPlant" element={<ListPlant />} />
        <Route path="/Contributors" element={<Contributor />} />
        <Route path="/CultureForm" element={<CultureForm />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
