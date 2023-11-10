/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
// import '@mantine/carousel';

import Landing from './components/pages/landing/Landing';

import { Login } from './components/pages/Login';
import { Register } from './components/pages/Registration';
import Settings from './components/pages/Settings';

import Logout from './components/pages/Logout';
import Search from './components/Search/Search';
import { Layout } from "./components/Layout";
import { Layout2 } from "./components/Layout2";

import Contributor from "./components/pages/Contributors";

import CreatePlant from "./components/pages/CreatePlant";
import ListPlant from "./components/pages/ListPlant";
import ViewPlantDetail from "./components/pages/ViewPlantDetail";

import ListAnimal from "./components/pages/ListAnimal";
import CreateAnimal from "./components/pages/CreateAnimal";
import ViewAnimalDetail from "./components/pages/ViewAnimalDetail";

import CreateCulture from "./components/pages/Culture/CreateCulture";
import CreateEthnicity from "./components/pages/Culture/CreateEthnicity";
import CreateClan from "./components/pages/Culture/CreateClan";
import CreateKingdom from "./components/pages/Culture/CreateKingdom";
import ListCulture from "./components/pages/Culture/ListCulture";
import ViewCultureDetail from "./components/pages/Culture/ViewCultureDetail";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/Layout2" element={<Layout2 />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        
        <Route path="/logout" element={<Logout />} />
        
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Search" element={<Search />} />      

        <Route path="/CreatePlant" element={<CreatePlant />} />
        <Route path="/ListPlant" element={<ListPlant />} />
        <Route path="/ViewPlantDetail/:id" element={<ViewPlantDetail />} />

        <Route path="/ListAnimal" element={<ListAnimal />} />
        <Route path="/CreateAnimal" element={<CreateAnimal />} />
        <Route path="/ViewAnimalDetail/:id" element={<ViewAnimalDetail />} />

        <Route path="/Contributors" element={<Contributor />} />

        <Route path="/CreateCulture" element={<CreateCulture />} />
        <Route path="/CreateEthnicity" element={<CreateEthnicity />} />
        <Route path="/CreateClan" element={<CreateClan />} />
        <Route path="/CreateKingdom" element={<CreateKingdom />} />
        <Route path="/ListCulture" element={<ListCulture />} />
        <Route path="/ViewCultureDetail/:id" element={<ViewCultureDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
