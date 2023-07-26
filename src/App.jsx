import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/partials/Nav';
import Home from './components/Pages/Home';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';


const App = () => {
  return (
      <div className="container">
        <Nav />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
        </Routes>
      </div>
  );
}

export default App;
