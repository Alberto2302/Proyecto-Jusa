import React, { Component } from 'react';
import Navbar from "../Nabvar/Nabvar";
import "../../css/consultas.css";
import axios from 'axios';
import { Table } from 'reactstrap';
import '../../css/contratacion.css';

class PersonList extends Component{
state = {
    persons: []
}

componentDidMount(){
    axios.get('http://localhost:3002/api/employees')
    .then(res =>{
        this.setState({
            persons: res.data
        });
            
    })
}
render(){
    return(
   
        <div>
        <div>
        <Navbar/>
        </div>
            <div className="tabla">
            <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Originario</th>
                <th>Fecha de Nacimiento</th>
                <th>Genero</th>
                <th>Estado Civil</th>
                <th>CURP</th> 

              </tr>
            </thead>
            <tbody>

            { this.state.persons.map(person => 
            (
              <tr>
                <th scope="row">1</th>
                <td>{person.id_employee}</td>
                <td>{person.name}</td>
                <td>{person.lastnamefat} {person.lastnamemoth}</td>
                <td>{person.origin}</td>
                <td>{person.birthdate}</td>
                <td>{person.gender}</td>
                <td>{person.civilstatus}</td>
                <td>{person.curp}</td>
              </tr>
            )
            )}

            </tbody>
            </Table>
            </div>
            </div>


    )
}

}

export default PersonList;