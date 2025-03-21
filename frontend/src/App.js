import logo from './logo.svg';
import './App.css';
import 'react-router-dom'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

const isAuthenticated = () => {
  return document.cookie.includes('connect.sid'); // Checks session cookie
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
