import React, { Component } from 'react';
import "../../../css/rh.css";
import Navbar from '../../Nabvar/Nabvar';

class Rh extends Component {
    render(){
        return(
            

            <div className="Rh" style={{ height:"1500px",background:'cornflowerblue'}}>
            
                <div>
                <Navbar/>
                </div>
                <h1 className="bienvenida">Bienvenido Mario</h1>

            </div>
            
        );
    }
}

export default Rh;