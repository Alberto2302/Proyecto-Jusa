import React, { Component} from 'react';
import '../../css/index.css';
import Login from '../Login';

class index extends Component {
render(){
    return(
        
        <div className="index">
    

        <Login/>
        {this.props.children}
        
        </div>
        
    ) 
   }
}
export default index;