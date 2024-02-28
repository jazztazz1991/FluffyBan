import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavBar } from './Components/navbar';
import { Footer } from './Components/footer';
import { Dashboard } from './pages/dashboard';

function App() {

  return (
    <div id="appContainer">
      <NavBar />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
