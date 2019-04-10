

import React,  {Component} from 'react';
import '../css/login.css';

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


                <button type="button" className="login-btn" onClick={this.onClick} placeholder="ingresa">
                    Ingresa                
                </button>
                
               

             </div>

        </div>
     );
 }
}
export default Login;