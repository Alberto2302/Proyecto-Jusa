

import React,  {Component} from 'react';
import "../src/css/appstyle.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import index from "./components/Home/index";
import Error from "./components/Error";
import Areas from "./components/Home/Areas";
import Rh from "./components/Areas/rh/Rh";
import Nabvar from "./components/Nabvar/Nabvar";
import Contratacion from './components/Areas/Contratacion';

class App extends Component{
 render(){
     return(
         <div>

      <BrowserRouter> 
      <Switch>
      <Route path="/rh" exact component={Rh}/>
      <Route path="/navbar" exact component={Nabvar}/>
      
      <Route path="/areas" exact component={Areas} /> 
      <Route path="/contratacion" exact component={Contratacion} /> 
      <Route exact path="/" component={index}  />
      <Route component={Error}/>
      </Switch> 
      </BrowserRouter>
         </div>
     );
 }
}
export default App;