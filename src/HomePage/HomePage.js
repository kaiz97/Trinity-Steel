import NavBarHome from "../NavBarHome/NavBarHome";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <NavBarHome />
           <img src="Ts-logo.png"></img>
           <div className="dd1">
                    <h2 className="hh1">TRINITY STEEL PRIVATE LIMITED</h2>
                 
            </div>
        </div>
    );
}

export default HomePage;