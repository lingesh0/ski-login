import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login1 from './components/Login1'; // Import the Login1 component
import Register from './components/Register';

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
