import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import MainNav from './components/MainNav';
import './App.css';
import HomePage from './pages/HomePage';
import { TicketProvider } from './contexts/TicketContext';

function App() {
  return (
    <>
      <TicketProvider>
        <Router>
          <MainNav />
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
          </Routes>
        </Router>
      </TicketProvider>
    </>
  );
}

export default App;
