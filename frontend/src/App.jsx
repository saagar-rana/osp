import Navbar from './components/Navbar';
import Activation from './pages/Activation'; 
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import CsvUpload from './pages/CsvUpload';
import AdminLogin from './pages/AdminLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/activation" element={<Activation/>} /> 
        <Route path="/servicespage" element={<ServicesPage/>} /> 
        <Route path="/number/csv/manual/admin" element={<AdminLogin/>} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
