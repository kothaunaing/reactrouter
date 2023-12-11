import { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Profile, Contact } from './pages/Home';
import { Navbar } from './pages/Navbar';

export const Context = createContext();

function App() {
  const [username, setUsername] = useState('Aung Naing');

  return (
    <div>
      <Context.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h3>Not page found </h3>} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
