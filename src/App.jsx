/* import { useState } from 'react' */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
// import '@mantine/carousel';

import Landing from './components/pages/landing/Landing';

import { Login } from './components/pages/Login/Login';
import { AdministratorLogin } from "./components/pages/Login/AdministratorLogin";
import AdministratorRegistration from "./components/pages/Register/AdministratorRegistration";
import Register from "./components/pages/Register/Register";


// import { Register } from './components/pages/Registration';
import Settings from './components/pages/Settings/Settings';

import Logout from './components/pages/Logout/Logout';
import Search from './components/Search/Search';
import { Layout } from "./components/Layout";
import { Layout2 } from "./components/Layout2";
import Footer from './components/Footer/Footer';


import CreatePlant from "./components/pages/Plants/CreatePlant";
import ListPlant from "./components/pages/Plants/ListPlant";
import ViewPlantDetail from "./components/pages/Plants/ViewPlantDetail";

import ListAnimal from "./components/pages/Animals/ListAnimal";
import CreateAnimal from "./components/pages/Animals/CreateAnimal";
import Animal from "./components/pages/Animals/Animal";
import ViewAnimalDetail from "./components/pages/Animals/ViewAnimalDetail";

import CreateCulture from "./components/pages/Culture/CreateCulture";
import CreateEthnicity from "./components/pages/Culture/CreateEthnicity";
import CreateClan from "./components/pages/Culture/CreateClan";
import CreateKingdom from "./components/pages/Culture/CreateKingdom";
import ListCulture from "./components/pages/Culture/ListCulture";
import ViewCultureDetail from "./components/pages/Culture/ViewCultureDetail";

import Dashboard from "./components/Dashboard";
import LogoutButton from "./components/pages/Logout/LogoutButton";
import Plant from "./components/pages/Plants/Plant";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Layout" element={<Layout />} />
        <Route path="/Layout2" element={<Layout2 />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Dashboard" element={<Dashboard />} /> 
        
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdministratorLogin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AdminRegister" element={<AdministratorRegistration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/logoutbutton" element={<LogoutButton />} />
        
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Search" element={<Search />} />      

        <Route path="/Plant" element={<Plant />} />
        <Route path="/CreatePlant" element={<CreatePlant />} />
        <Route path="/ListPlant" element={<ListPlant />} />
        <Route path="/ViewPlantDetail/:id" element={<ViewPlantDetail />} />

        <Route path="/ListAnimal" element={<ListAnimal />} />
        <Route path="/CreateAnimal" element={<CreateAnimal />} /> 
        <Route path="/Animal" element={<Animal />} />
        <Route path="/ViewAnimalDetail/:id" element={<ViewAnimalDetail />} />

       

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
