import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Dashboard from './pages/Dashboard';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App