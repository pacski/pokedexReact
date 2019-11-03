import React from 'react';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

class Nav extends React.Component{

    render(){
        return (

<ul className="nav justify-content-center bg-danger">
  <li className="nav-item">
  <Link className="text-dark display-4" to="/">Accueil</Link>
  </li>
</ul>

            
           

           
        )
    }
}


export default Nav