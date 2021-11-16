import { useState } from "react";
const Navbar = () => {

  let navList = '-35%';
  const [state, setState] = useState(navList);
  const handleClick = () => {
    console.log(navList);
    if(navList === '-35%'){
      navList = '0%';
    }
    else if(navList === '0%')
      navList = '-35%';
    console.log(navList);
    setState(navList);
  }

  return (
  <nav className="navbar">
    <div className="slide" id="slide-navbar" style={
      {
        left: state
      }
    }>
       <div className="nav-btn" onClick={handleClick}>
   
       </div>
    </div>
    <ul className="nav-list" style={
      {
        left: state
      }
    }>
      <li className="nav-items">Home</li>
      <li className="nav-items">About</li>
      <li className="nav-items">Service & Package</li>
      <li className="nav-items">Gallery</li>
      <li className="nav-items">FAQ</li>
      <li className="nav-items">Contact</li>
    </ul>
  </nav>
  );
};

export default Navbar;
