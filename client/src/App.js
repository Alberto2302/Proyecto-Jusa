

import React,  {Component} from 'react';
import "../src/css/appstyle.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import index from "./components/Home/index";
import Error from "./components/Error";
import Areas from "./components/Home/Areas";
import Rh from "./components/Areas/rh/Rh";
import Nabvar from "./components/Nabvar/Nabvar";
import Contratacion from './components/Areas/Contratacion';
import Credenciales from './components/Areas/Credenciales';
import Fichastecnicas from './components/Areas/Fichastecnicas';
import Consultas from './components/Areas/Consultas';
import Actualizacion from './components/Areas/rh/Actualizacion';
import CreateTodo from './components/Areas/CreateTodo'


class App extends Component{
 render(){
     return(
         <div>

      <BrowserRouter> 
      <Switch>
      <Route path="/rh" exact component={Rh}/>
      <Route path="/navbar" exact component={Nabvar}/>
      <Route path="/createtodo" component={CreateTodo} />
      <Route path="/areas" exact component={Areas} />   
      <Route path="/contratacion" exact component={Contratacion} /> 
      <Route path="/actualizacion" exact component={Actualizacion}/>
      <Route path="/credenciales" exact component={Credenciales} />
      <Route path="/fichastecnicas" exact component={Fichastecnicas} />
      <Route path="/consultas" exact component={Consultas} />
      <Route exact path="/" component={index}  />
      <Route component={Error}/>
      </Switch> 
      </BrowserRouter>
         </div>
     );
 }
}
export default App;