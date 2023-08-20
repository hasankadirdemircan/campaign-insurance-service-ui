import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import CreateCampaignForm from './components/CreateCampaignForm';
import LoadingModal from './components/LoadignModal';

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
      <LoadingModal />
    </div>
  );
}

export default App;
