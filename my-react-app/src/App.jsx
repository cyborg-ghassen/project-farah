import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './home/home';
import Patient from './patient/patient';
import Compl from './avis/complement';
import Pret from './avis/pret';
import Cours from './avis/cours';
import Update from './update/miseajour';
import Navbar from "./components/Navbar";
import Historique from "./update/historique";
import Register from "./login/register";
import Login from './login/login';
import ForgotPassword from "./login/forgetpassword";

function AppWrapper() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/complement" element={<Compl />} />
        <Route path="/pret" element={<Pret />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/update" element={<Update />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/historique" element={<Historique />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
