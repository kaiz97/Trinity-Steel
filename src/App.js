import './App.css';
import LoginPage from './LoginPage/LoginPage';
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import NavBarHome from './NavBarHome/NavBarHome';
import Register from './Register/Register';
import About from './About/About';

function App() {
  return (
    <div>

      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  );

}

export default App;
