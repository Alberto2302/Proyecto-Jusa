import React from 'react';
import "../../css/navbar.css";
import DrawerToggkeButton from '../SideDrawer/DrawerToggleButton';
import {Link} from "react-router-dom"; 


const Navbar = props => (
   
<header className="tolbar">
    <nav className="toolbar_navigation">
        <div>
            <DrawerToggkeButton click={props.drawerClickHandler}/>
        </div>
             
        <div className="toolbar_title">RECURSOS HUMANOS</div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/Contratacion" >Contratación</Link></li>
                <li><Link to="/areas">Credenciales</Link></li>
                <li><a href="/">Fichas Tecnicas</a></li>
                <li><a href="/">Consultas</a></li>
            </ul>
        </div>
    </nav>
</header>

);

export default Navbar;