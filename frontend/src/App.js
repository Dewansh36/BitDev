import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './Components/Home/Home';
import CP from './Components/Cp/Cp'
import Login from './Components/Login/Login';
import Register from './Components/Login/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cp' element={<CP />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
