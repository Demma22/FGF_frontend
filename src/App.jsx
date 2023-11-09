/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import Landing from './components/pages/landing/Landing';

import { Login } from './components/pages/Login';
import { Register } from './components/pages/Registration';
import Settings from './components/pages/Settings';

import Logout from './components/pages/Logout';
import Search from './components/Search/Search';
import { Layout } from "./components/Layout";
import CreatePlant from "./components/pages/CreatePlant";
import Contributor from "./components/pages/Contributors";
import ListPlant from "./components/pages/ListPlant";
import ListAnimal from "./components/pages/ListAnimal";
import CreateAnimal from "./components/pages/CreateAnimal";
import CreateCulture from "./components/Culture/CreateCulture";
import CreateEthnicity from "./components/Culture/CreateEthnicity";
import CreateClan from "./components/Culture/CreateClan";
import CreateKingdom from "./components/Culture/CreateKingdom";
import ViewPlantDetail from "./components/pages/ViewPlantDetail";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Settings" element={<Settings />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/CreateAnimal" element={<CreateAnimal />} />

        <Route path="/CreatePlant" element={<CreatePlant />} />
        <Route path="/ListPlant" element={<ListPlant />} />
        <Route path="/ListAnimal" element={<ListAnimal />} />
        <Route path="/ViewPlantDetail/:id" element={<ViewPlantDetail />} />

        <Route path="/Contributors" element={<Contributor />} />

        <Route path="/CreateCulture" element={<CreateCulture />} />
        <Route path="/CreateEthnicity" element={<CreateEthnicity />} />
        <Route path="/CreateClan" element={<CreateClan />} />
        <Route path="/CreateKingdom" element={<CreateKingdom />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
