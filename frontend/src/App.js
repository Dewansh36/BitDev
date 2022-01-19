import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './Components/Home/Home';
import CP from './Components/Cp/Cp'
import Login from './Components/Login/Login';
import Register from './Components/Login/Registration';
import Navbar from './Components/navbar/navbar'
import Footer from './Components/footer/footer'
import Profile from './Components/User/Profile';

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cp' element={<CP />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} /> 
        <Route path='/profile' element={<Profile />} /> 
        {/* <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} /> */}
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
