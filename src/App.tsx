import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateCampaignForm } from './components/CreateCampaignForm';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-insurance" element={<CreateCampaignForm />} />
          <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
