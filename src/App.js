import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login1 from './components/Login1'; 
import Register from './components/Register';
import './components/login.css';
import './components/register.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
