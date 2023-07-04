import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Features from './components/Features';
import Routing from './components/Routing';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Homepage" element={<Homepage />} />
          <Route exact path="/Features" element={<Features />} />
          <Route exact path="/Routes" element={<Routing />} />
          <Route exact path="/Pricing" element={<Pricing />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
