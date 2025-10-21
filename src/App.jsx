import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/User/pages/Home'
import Login from './Components/User/pages/Login'
import Register from './Components/User/pages/Register'
import UrlShortenerPage from './Components/urlShortener/UrlShortener';
import DashboardPage from './Components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
