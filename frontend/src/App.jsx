import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
      </Routes>
    </Router>
  )
}

export default App