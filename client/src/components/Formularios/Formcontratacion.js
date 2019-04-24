import React,  { Component }  from 'react';
import "../../css/formulario.css";
import axios from "axios";


class Formcontratacion extends Component {
state = {
   name: '',
}

handleChangle = event => {
  this.setState({ name: event.target.value });
}

handleSubmit = event => {
      event.preventDefault();

      const user = {
         name: this.state.name,
      };

  axios.post(`http://localhost:3002/api/employees`, { user })  
    .then(res => {
      console.log(res);
       console.log(res.data);
 })
}
   

    render() {
        return (
        <div className="contenedor">
          <header className="formulario">   
            <form className="formdatos" onSubmit={this.handleSubmit}>
             <div className= "flex-container">
                <div className="flex-container-div">
                   <div className="titulos"><h4>Datos Personales</h4></div>
                     <div className="datos">
                          <label htmlFor="idempleado">id_Empleado:</label>
                         <input name="idempleado" id="idempleado" type="text"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="nombreempleado">Nombre:</label>
                        <input name="name"   type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="apaterno" >A.Paterno:</label>
                        <input name="apaterno" id="apaterno" type="text"></input>
                     </div>
                     <div  className="datos">
                        <label htmlFor="amaterno">A.Materno:</label>
                        <input name="amaterno" id="amaterno" type="text"></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="originario">Originario:</label>
                        <input name="originario" id="originario" type="text"></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="f_nacimiento">Fecha de nacimiento:</label>
                        <input name="f_nacimiento" id="f_nacimiento" type="date"></input>
                     </div>
                     <div className="selector">
                        <label  htmlFor="genero">Genero:</label>
                        <input name="genero" id="genero" type="radio" value="h"/>Hombre
                        <input name="genero"type="radio" value="m"/>Mujer
                     </div>
                     <div className="selector">
                        <label  htmlFor="estadocivil">Estado civil:</label>
                        <input  name="estadocivil" id="estadocivil" type="radio"/>Casado
                        <input  name="estadocivil" id="estadocivil" type="radio"/>Soltero
                     </div>
                     <div className="datos">
                        <label  htmlFor="curp">Curp:</label>
                        <input name="curp" id="curp" minLength="18" maxLength="" type="text"></input>
                     </div>
                     <div className="datos" >
                        <label htmlFor="rfc">RFC:</label>
                        <input name="rfc" id="rfc"  type="text"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="imss">IMSS:</label>
                        <input name="imss" id="imss" type="min"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="escolaridad">Escolaridad:</label>
                        <input name="escolaridad" id="escolaridad" type="text"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="celular">Numero Celular:</label>
                        <input name="celular" id="celular" type="text"></input>
                     </div>
                     <div className="titulos"><h4>Contacto de emergencia</h4></div>
                     <div className="datos">
                        <label htmlFor="nom_contacto">Nombre:</label>
                        <input name="nom_contacto" id="nom_contacto" type="text"></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="parentesco">Parentesco:</label>
                        <input name="parentesco" id="parentesco" type="text"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="celular_parentesco">Numero Celular:</label>
                        <input name="celular_parentesco" id="celular_parentesco" type="text"></input>
                     </div>
                     
                     <div className="titulos"><h4>Datos de domicilio</h4></div>
                   <div className="datos">
                        <label htmlFor="Estatus_casa">Casa:</label>
                        <select name="Estatus_casa" id="Estatus_casa">
                        <option value="Propia">Selecciona una opción</option>
                        <option value="Propia">Propia</option>
                        <option value="Rentada">Rentada</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="calle">Calle y numero:</label>
                        <input name="calle" id="calle" type="text"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="colonia" >Colonia:</label>
                        <input name="colonia" id="colonia" type="text"></input>
                     </div>
   
                     <div className="datos">
                        <label htmlFor="alcaldia">Alcaldia:</label>
                        <input name="alcaldia" id="alcaldia" type="text"></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="codigopostal">CP:</label>
                        <input name="codigopostal" id="codigopostal" type="text"></input>
                     </div>

                        <div className="titulos"><h4>Estado Medico</h4></div> 

                        <div className="datos">
                           <label htmlFor="enfermedades">Enfermedades cronicas:</label>
                           <input name="enfermedades" id="enfermedades" type="text"></input>
                        </div>
                        <div className="datos">
                           <label htmlFor="comp_medico" >Comprobante medico:</label>
                           <input name="comp_medico" id="comp_medico" type="text"></input>
                        </div>

                </div>

            <div className="flex-container-div">
              
                     <div className="titulos"><h4>Datos de la empresa</h4></div>
                     

                      <div className="datos">
                        <label htmlFor="id_empresa">id_Empresa:</label>
                        <input name="id_empresa" id="id_empresa" type="date"></input>
                     </div> 
                     
                   <div className="datos">
                        <label htmlFor="empresa">Empresa:</label>
                        <select name="empresa" id="empresa">
                        <option value="">Selecciona una opción</option>
                        <option value="SERVIMA">SERVIMA</option>
                        <option value="IMESERR">IMESERR</option>
                        <option value="ADMI-SERVI">ADMI-SERVI</option>
                        <option value="SPOTLESS">SPOTLESS</option>

                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="servicio">Servicio:</label>
                        <select name="servicio" id="servicio">
                        <option value="">Selecciona una opción</option>
                        <option value="antigua">Antigua</option>
                        <option value="plaza universidad">Plaza Universidad</option>
                        <option value="plaza carso">Plaza Carso</option>
                        <option value="Galerias">Galerias</option>

                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="cargo">Cargo:</label>
                        <select name="cargo" id="cargo">
                        <option value="">Selecciona una opción</option>
                        <option value="elemento">Elemento</option>
                        <option value="jefe_turno">Jefe Turno</option>
                        <option value="jefe_servicio">Jefe de Servicio</option>
                        <option value="supervisor">Supervisor</option>

                        </select>
                   </div>
                     <div className="datos">
                        <label htmlFor="f_ingreso">Fecha de ingreso:</label>
                        <input name="f_ingreso" id="f_ingreso" type="date"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="f_reingreso">Fecha de re-ingreso:</label>
                        <input name="f_reingreso" id="f_reingreso" type="date"></input>
                     </div>
                     <div className="datos">
                        <label  htmlFor="dado_alta_imss">E.alta imss:</label>
                        <input name="dado_alta_imss" id="dado_alta_imss" minLength="18" maxLength="" type="text"></input>
                     </div>
                     <div className="datos" >
                        <label htmlFor="medio_inf">Por que medio se entero:</label>
                        <input name="medio_inf" id="medio_inf"  type="text"></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="imss">Numero de IMSS:</label>
                        <input name="imss" id="imss" type="min"></input>
                     </div>
                   

                       <div className="titulos"><h4>Documentacion</h4></div>
                   <div className="datos">
                        <label htmlFor="Estatus_acta">Acta de nacimiento:</label>
                        <select name="Estatus_acta" id="Estatus_acta">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="estatus_curp">Curp:</label>
                        <select name="estatus_curp" id="Estatus_curp">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="estatus_com_dom">Comprobante de domicilio:</label>
                        <select name="estatus_com_dom" id="estatus_com_dom">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="estatus_antecedentes">Antecedentes no penales:</label>
                        <select name="estatus_antecedntes" id="estatus_antecedentes">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="estatus_cartilla">Cartilla:</label>
                        <select name="estatus_cartilla" id="estatus_cartilla">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>

                  <div className="datos">
                        <label htmlFor="estatus_precartilla">Pre-Cartilla:</label>
                        <select name="estatus_precartilla" id="estatus_precartilla">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>

                    <div className="datos">
                        <label htmlFor="comprob_estudio">Comprobante de estudios:</label>
                        <select name="comprob_estudio" id="comprob_estudio">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="cartas_recomendacion">Cartas de recomendación:</label>
                        <select name="cartas_recomendacion" id="cartas_recomendacion">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div> 
                   <div className="datos">
                        <label htmlFor="ine">Copia de INE:</label>
                        <select name="ine" id="ine">
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div> 

                      <div className="titulos"><h4>Información adicional</h4></div> 


                     <div className="datos">
                        <label htmlFor="quien_captura">Quien captura Información:</label>
                        <input name="quien_captura" id="quien_captura" type="text"></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="captura_información">Recepción de documentos:</label>
                        <input name="captura_información" id="captura_información" type="text"></input>
                     </div>
                     
                      
                     <button type="submit" >Realizar</button>
                     
                    

             </div>
               <div className="camara">
                  <div><video id="video"></video></div>
                  <div><canvas id="canvas"></canvas></div>
                  <button >Foto</button>
               </div>

              


            </div>

             </form>
             </header>
         
             </div>


        );
    }
}

export default Formcontratacion;