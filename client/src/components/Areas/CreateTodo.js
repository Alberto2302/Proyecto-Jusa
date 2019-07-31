import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


 class CreateTodo extends Component {

    constructor(props) {
        super(props);


        this.onChangeid_employe = this.onChangeid_employe.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            id_employe: '',
            name: '',
            gender: '',
            todo_completed: false
        }
    }

    onChangeid_employe(e) {
        this.setState({
            id_employe: e.target.value
        });
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangegender(e) {
        this.setState({
           gender: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`id_employe: ${this.state.id_employe}`);
        console.log(`name: ${this.state.name}`);
        console.log(`gender: ${this.state.gender}`);
        
        const newTodo = {
            id_employe: this.state.id_employe,
            name: this.state.name,
            gender: this.state.gender,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
                .then(res => console.log(res.data));

        this.setState({
            id_employe: '',
            name: '',
            gender: '',
            todo_completed: false
        })

     

    }


    render() {
        return (
            <div style={{marginTop: 10}}  >
            
            <h3>Create New Todo</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>id:Empleado: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.id_employe}
                            onChange={this.onChangeid_employe}
                            />
                </div>
                <div className="form-group">
                    <label>nombre: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangename}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHombre" 
                                value="Hombre"
                                checked={this.state.gender==='Hombre'} 
                                onChange={this.onChangegender}
                                />
                        <label className="form-check-label">Hombre</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMujer" 
                                value="Mujer" 
                                checked={this.state.gender==='Mujer'} 
                                onChange={this.onChangegender}
                                />
                        <label className="form-check-label">Mujer</label>
                    </div>
                  
                </div>

                <div className="form-group">
                    <input type="submit" value="Guardar" className="btn btn-primary" />
                </div>
            </form>
        </div>


            
        )
    }
}

export default CreateTodo;