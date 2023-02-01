import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { TicketProvider } from './contexts/TicketContext';
import MainNav from './components/MainNav';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

function App() {
  return (
    <>
      <TicketProvider>
        <Router>
          <MainNav />
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/tickets' element={<ResultsPage/>}></Route>
          </Routes>
        </Router>
      </TicketProvider>
    </>
  );
}

export default App;
