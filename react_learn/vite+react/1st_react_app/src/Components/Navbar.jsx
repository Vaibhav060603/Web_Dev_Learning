import React from 'react';
import "./Navbar.css";
import {Link,NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <div className="container">
            <NavLink to="/" className={(e) => {return e.isActive ? "red" : "c1"}}>Home</NavLink>
            <NavLink to="/about" className={(e) => {return e.isActive ? "red" : "c1"}}>About</NavLink>
            <NavLink to="/contact" className={(e) => {return e.isActive ? "red" : "c1"}}>Contact Us</NavLink>
            <NavLink to="/textutils" className={(e) => {return e.isActive ? "red" : "c1"}}>Text-Utils</NavLink>
            <NavLink to="/todo" className={(e) => {return e.isActive ? "red" : "c1"}}>To-Do</NavLink>
            <NavLink to="/clock" className={(e) => {return e.isActive ? "red" : "c1"}}>Clock</NavLink>
            <NavLink to="/calculator" className={(e) => {return e.isActive ? "red" : "c1"}}>Calculator</NavLink>
            <NavLink to="/news" className={(e) => {return e.isActive ? "red" : "c1"}}>News</NavLink>
        </div>
    
    </>
  )
}
