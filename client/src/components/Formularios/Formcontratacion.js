import React,  { Component }  from 'react';
import "../../css/formulario.css";
import axios from "axios";


class Formcontratacion extends Component {
state = {
   id_employee:'',
   name: '',
   lastnamefat: '',
   lastnamemoth:'',
   origin:'',
   birthdate:'',
   gender:'',
   civilstatus:'',
   curp:'',
   rfc:'',
   imss:'',
   scholarship:'',
   cellphonenumber:'',
   email:'',
   emergencyContact:'',
   contactRelationship:'',
   contactNumber:'',
   homestatus:'',
   streetandNumber:'',
   colony:'',
   townHall:'',
   cp:'',
   chronicDiseases:'',
   medicalVoucher:'',
   birthCertificate:'',
   curpStatus:'',
   proofofAddress:'',
   noCriminalRecord:'',
   primer:'',
   prePrimer:'',
   proofofStudies:'',
   letterOfrecommendation:'',
   copyOfIne:'',
   whoCapturesInformation:'',
   documentsReception:''

}

handleChangle = event => {
  this.setState({ id_employee: event.target.value });
  this.setState({ name: event.target.value });
  this.setState({ lastnamefat: event.target.value });
  this.setState({ lastnamemoth: event.target.value });
  this.setState({ origin: event.target.value });
  this.setState({ birthdate: event.target.value });
  this.setState({ gender: event.target.value });
  this.setState({ civilstatus: event.target.value });
  this.setState({ curp: event.target.value });
  this.setState({ rfc: event.target.value });
  this.setState({ imss: event.target.value });
  this.setState({ scholarship: event.target.value });
  this.setState({ cellphonenumber: event.target.value });
  this.setState({ email: event.target.value });
  this.setState({ emergencyContact: event.target.value });
  this.setState({ contactRelationship: event.target.value });
  this.setState({ contactNumber: event.target.value });
  this.setState({ homestatus: event.target.value });
  this.setState({ streetandNumber: event.target.value });
  this.setState({ colony: event.target.value });
  this.setState({ townHall: event.target.value });
  this.setState({ cp: event.target.value });
  this.setState({ chronicDiseases: event.target.value });
  this.setState({ medicalVoucher: event.target.value });
  this.setState({ birthCertificate: event.target.value });
  this.setState({ curpStatus: event.target.value });
  this.setState({ proofofAddress: event.target.value });
  this.setState({ noCriminalRecord: event.target.value });
  this.setState({ primer: event.target.value });
  this.setState({ prePrimer: event.target.value });
  this.setState({ letterOfrecommendation: event.target.value });
  this.setState({ copyOfIne: event.target.value });
  this.setState({ whoCapturesInformation: event.target.value });
  this.setState({ documentsReception: event.target.value });
  

}

handleSubmit = event => {
      event.preventDefault();

      const employeeSchema = {
         id_employee: this.state.id_employee,
         name: this.state.name,
         lastnamefat: this.state.lastnamefat,
         lastnamemoth: this.state.lastnamemoth,
         origin: this.state.origin,
      };

  axios.post(`http://localhost:3002/api/employees/register`, { employeeSchema })  
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
                          <label htmlFor="id_employee">id_Empleado:</label>
                         <input name="id_employee" id="id_employee" type="text" onChange={this.handleChangle}   ></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="nombreempleado">Nombre:</label>
                        <input name="name" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="lastnamemoth" >A.Paterno:</label>
                        <input name="lastnamefat" id="apaterno" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div  className="datos">
                        <label htmlFor="amaterno">A.Materno:</label>
                        <input name="lastnamemoth" id="amaterno" type="text" onChange={this.handleChangle}></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="origin">Originario:</label>
                        <input name="origin" id="originario" type="text" onChange={this.handleChangle}></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="birthdate">Fecha de nacimiento:</label>
                        <input name="birthdate" id="f_nacimiento" type="date" onChange={this.handleChangle}></input>
                     </div>
                     <div className="selector">
                        <label  htmlFor="genero">Genero:</label>
                        <input name="gender" id="genero" type="radio" value="h" onChange={this.handleChangle}/>Hombre
                        <input name="gender"type="radio" value="m" onChange={this.handleChangle}/>Mujer
                     </div>
                     <div className="selector">
                        <label  htmlFor="estadocivil">Estado civil:</label>
                        <input  name="civilstatus" id="estadocivil" type="radio" onChange={this.handleChangle}/>Casado
                        <input  name="civilstatus" id="estadocivil" type="radio" onChange={this.handleChangle}/>Soltero
                     </div>
                     <div className="datos">
                        <label  htmlFor="curp">Curp:</label>
                        <input name="curp" id="curp" minLength="18" maxLength="" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos" >
                        <label htmlFor="rfc">RFC:</label>
                        <input name="rfc" id="rfc"  type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="imss">IMSS:</label>
                        <input name="imss" id="imss" type="min" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="scholarship">Escolaridad:</label>
                        <input name="scholarship" id="escolaridad" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="cellphonenumber">Numero Celular:</label>
                        <input name="cellphonenumber" id="celular" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="email">Correo:</label>
                        <input name="email" id="email" type="email" onChange={this.handleChangle}></input>
                     </div>

                     <div className="titulos"><h4>Contacto de emergencia</h4></div>
                     <div className="datos">
                        <label htmlFor="emergencyContact">Nombre:</label>
                        <input name="emergencyContact" id="nom_contacto" type="text" onChange={this.handleChangle}></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="contactRelationship">Parentesco:</label>
                        <input name="contactRelationship" id="parentesco" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="contactNumber">Numero Celular:</label>
                        <input name="contactNumber" id="celular_parentesco" type="text" onChange={this.handleChangle}></input>
                     </div>
                     
                     <div className="titulos"><h4>Datos de domicilio</h4></div>
                   <div className="datos">
                        <label htmlFor="homestatus">Casa:</label>
                        <select name="homestatus" id="Estatus_casa" onChange={this.handleChangle}>
                        <option value="Propia">Selecciona una opción</option>
                        <option value="Propia">Propia</option>
                        <option value="Rentada">Rentada</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="streetandNumber">Calle y numero:</label>
                        <input name="streetandNumber" id="calle" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="colony" >Colonia:</label>
                        <input name="colony" id="colonia" type="text" onChange={this.handleChangle}></input>
                     </div>
   
                     <div className="datos">
                        <label htmlFor="townHall">Alcaldia:</label>
                        <input name="townHall" id="alcaldia" type="text" onChange={this.handleChangle}></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="cp">CP:</label>
                        <input name="cp" id="codigopostal" type="text" onChange={this.handleChangle}></input>
                     </div>

                        <div className="titulos"><h4>Estado Medico</h4></div> 

                        <div className="datos">
                           <label htmlFor="chronicDiseases">Enfermedades cronicas:</label>
                           <input name="enfermedades" id="enfermedades" type="text" onChange={this.handleChangle}></input>
                        </div>
                        <div className="datos">
                           <label htmlFor="birthCertificate" >Comprobante medico:</label>
                           <input name="birthCertificate" id="comp_medico" type="text" onChange={this.handleChangle}></input>
                        </div>
                      
                        <div className="datos">
                              <label htmlFor="curpStatus">Curp:</label>
                              <select name="curpStatus" id="Estatus_curp" onChange={this.handleChangle}>
                              <option value="">Selecciona una opción</option>
                              <option value="no_entrega">no entrega</option>
                              <option value="buen_estado">Buen estado</option>
                              <option value="buen_estado">Mal estado</option>
                              </select>
                        </div> 



                </div>

            <div className="flex-container-div">
              
                     <div className="titulos"><h4>Datos de la empresa</h4></div>
                     

                      <div className="datos">
                        <label htmlFor="id_empresa">id_Empresa:</label>
                        <input name="id_empresa" id="id_empresa" type="date" onChange={this.handleChangle}></input>
                     </div> 
                     
                   <div className="datos">
                        <label htmlFor="empresa">Empresa:</label>
                        <select name="empresa" id="empresa" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="SERVIMA">SERVIMA</option>
                        <option value="IMESERR">IMESERR</option>
                        <option value="ADMI-SERVI">ADMI-SERVI</option>
                        <option value="SPOTLESS">SPOTLESS</option>

                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="servicio">Servicio:</label>
                        <select name="servicio" id="servicio" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="antigua">Antigua</option>
                        <option value="plaza universidad">Plaza Universidad</option>
                        <option value="plaza carso">Plaza Carso</option>
                        <option value="Galerias">Galerias</option>

                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="cargo">Cargo:</label>
                        <select name="cargo" id="cargo" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="elemento">Elemento</option>
                        <option value="jefe_turno">Jefe Turno</option>
                        <option value="jefe_servicio">Jefe de Servicio</option>
                        <option value="supervisor">Supervisor</option>

                        </select>
                   </div>
                     <div className="datos">
                        <label htmlFor="f_ingreso">Fecha de ingreso:</label>
                        <input name="f_ingreso" id="f_ingreso" type="date" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="f_reingreso">Fecha de re-ingreso:</label>
                        <input name="f_reingreso" id="f_reingreso" type="date" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label  htmlFor="dado_alta_imss">E.alta imss:</label>
                        <input name="dado_alta_imss" id="dado_alta_imss" minLength="18" maxLength="" type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos" >
                        <label htmlFor="medio_inf">Por que medio se entero:</label>
                        <input name="medio_inf" id="medio_inf"  type="text" onChange={this.handleChangle}></input>
                     </div>
                     <div className="datos">
                        <label htmlFor="imss">Numero de IMSS:</label>
                        <input name="imss" id="imss" type="min" onChange={this.handleChangle}></input>
                     </div>
                   

                       <div className="titulos"><h4>Documentacion</h4></div>
                   <div className="datos">
                        <label htmlFor="Estatus_acta">Acta de nacimiento:</label>
                        <select name="Estatus_acta" id="Estatus_acta" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                  
                   <div className="datos">
                        <label htmlFor="proofofAddress">Comprobante de domicilio:</label>
                        <select name="proofofAddress" id="estatus_com_dom" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="noCriminalRecord">Antecedentes no penales:</label>
                        <select name="noCriminalRecord" id="estatus_antecedentes" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="primer">Cartilla:</label>
                        <select name="primer" id="estatus_cartilla" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>

                  <div className="datos">
                        <label htmlFor="prePrimer">Pre-Cartilla:</label>
                        <select name="prePrimer" id="estatus_precartilla" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>

                    <div className="datos">
                        <label htmlFor="proofofStudies">Comprobante de estudios:</label>
                        <select name="proofofStudies" id="comprob_estudio" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="datos">
                        <label htmlFor="letterOfrecommendation">Cartas de recomendación:</label>
                        <select name="letterOfrecommendation" id="cartas_recomendacion" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div> 
                   <div className="datos">
                        <label htmlFor="copyOfIne">Copia de INE:</label>
                        <select name="copyOfIne" id="ine" onChange={this.handleChangle}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div> 

                      <div className="titulos"><h4>Información adicional</h4></div> 


                     <div className="datos">
                        <label htmlFor="whoCapturesInformation">Quien captura Información:</label>
                        <input name="whoCapturesInformation" id="quien_captura" type="text" onChange={this.handleChangle}></input>
                     </div> 
                     <div className="datos">
                        <label htmlFor="documentsReception">Recepción de documentos:</label>
                        <input name="documentsReception" id="captura_información" type="text" onChange={this.handleChangle}></input>
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