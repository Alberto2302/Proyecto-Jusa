

import React,  {Component} from 'react';
import '../css/login.css';
import { Link } from "react-router-dom";

class Login extends Component{
 render(){
     return(
        <div className="root-container">
            <div className="box-container">
                <div>
                  <h2>Grupo JUSA</h2>
                </div> 

                <div className="input-group" >
                        <label htmlFor="username">Ingresa Usuario:    </label>
                        <input text="input-group" name="username" className="login-imput" placeholder="Nombre de Usuario" ></input>
                </div>    

                 <div className="input-group" >
                        <label htmlFor="password">Ingresa Password: </label>
                        <input text="password" name="password" className="login-imput" placeholder="Password" ></input>
                </div> 

              
              <Link to="/rh" > 
                <button type="button" className="login-btn" onClick={this.onClick} placeholder="ingresa">
                          Ingresa   
                </button>
                
                </Link>

             </div>

        </div>
     );
 }
}
export default Login;