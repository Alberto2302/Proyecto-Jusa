import React, { Component } from 'react';
import Navbar from "../Nabvar/Nabvar";

import Formcontratacion from '../Formularios/Formcontratacion';


class Contratacion extends Component {
    render(){
        return(
    
        <div className="App">

                <Navbar/>
                <Formcontratacion/>
           
       
         </div> 
        );
        


    }
}
export default Contratacion;