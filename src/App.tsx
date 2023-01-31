import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import MainNav from './components/MainNav';
import './App.css';
import HomePage from './pages/HomePage';
import { helperFetchTicketsData } from './helpers/helperFetchTickets';

function App() {
  return (
    <>
      <Router>
        <MainNav />
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
