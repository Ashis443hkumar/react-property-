import React,{useState} from "react";
import "./header.css"

export default function Header() {

  const [isMobile, setisMobile] = useState(false)

  return (
    <div className="header">
      <div className="logo">
        <h2>Softkingo</h2>
      </div>
      <div className={isMobile ? "navbar-mobile-link" : "navbar-list" } onClick={() => setisMobile(isMobile)}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Servicer</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <div className="login">
          <a href="">Login</a>
        </div>
      </div>
      <div className="navbar-link-icons" onClick={() => setisMobile(!isMobile)}>
        {
          isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)
        }
          
        
      </div>
    </div>
  );
}






// "https://images.pexels.com/photos/2059467/pexels-photo-2059467.jpeg?auto=compress&cs=tinysrgb&w=600"
// "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600"
// "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"


// https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600
// https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600