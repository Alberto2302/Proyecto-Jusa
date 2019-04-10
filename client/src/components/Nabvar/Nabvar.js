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
            <div className="fonts_righteous header_logo_venue">Recursos Humanos</div>
            <div className="header_logo_title">Grupo-Jusa</div>
            </div>
            <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/contratacion" >Contratación</Link></li>
                <li><Link to="/">Credenciales</Link></li>
                <li><a href="/">Fichas Tecnicas</a></li>
                <li><a href="/">Consultas</a></li>
            </ul>
             </div>

                <IconButton 
                    arial-label="Menu"
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