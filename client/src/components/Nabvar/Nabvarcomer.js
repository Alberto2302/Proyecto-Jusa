import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton } from '@material-ui/core';
import {Link} from "react-router-dom"; 
import "../../css/navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';

class Nabvar extends Component {
        state ={
            drawerOpen: false
        }

            toogleDrawer  = (value) => {
                this.setState({
                    drawerOpen: value
                })
            }

    render() {
        return (
            <div>
            <AppBar position="fixed"
        
            style={{
                backgroundColor:'#2f2f2f',
                boxShadow:'none',
                padding: '0'
            }}
            >
            
            <Toolbar>
            <div className="header_logo">
            <div className="font_righteous header_logo_venue">Comercialización</div>
            <div className="header_logo_title">Grupo-Jusa</div>
            </div>
            <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/contratacion" >Apertura de Servicio</Link></li>
                <li><Link to="/actualizacion">Catalogo de Servicios</Link></li>
                <li><Link to="/credenciales">Credenciales</Link></li>
                <li><Link to="/fichastecnicas">Fichas tecnicas</Link></li>
                <li><Link to="/consultas">Consultas</Link></li>
                <li><Link to="/createTodo">Nuevos</Link></li>
               
            </ul>
             </div>

                <IconButton 
                    aria-label="Menu"
                    color="inherit"  
                    onClick={()=> this.toogleDrawer(true)}
                >
                <MenuIcon/>
                </IconButton>
                <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value)=> this.toogleDrawer(value)}
                />


            </Toolbar>

            </AppBar>
            </div>
        
        );

    }
}

export default Nabvar;