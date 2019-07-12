import React,  { Component }  from 'react';
import "../../css/formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


class Formcontratacion extends Component {
constructor(props)  {
   super(props);

   this.onChangeid_employe = this.onChangeid_employe.bind(this);
   this.onChangename = this.onChangename.bind(this);
   this.onChangelastnamefat = this.onChangelastnamefat.bind(this);
   this.onChangelastnamemoth = this.onChangelastnamemoth.bind(this);
   this.onChangeorigin = this.onChangeorigin.bind(this);
   this.onChangebirthdate = this.onChangebirthdate.bind(this);
   this.onChangegender = this.onChangegender.bind(this);
   this.onChangecivilstatus = this.onChangecivilstatus.bind(this);
   this.onChangecurp = this.onChangecurp.bind(this);
   this.onChangerfc = this.onChangerfc.bind(this);
   this.onChangeimss = this.onChangeimss.bind(this);
   this.onChangescholarship= this.onChangescholarship.bind(this);
   this.onChangecellphonenumber = this.onChangecellphonenumber.bind(this);
   this.onChangeemail = this.onChangeemail.bind(this);
   this.onChangeemergencyContact = this.onChangeemergencyContact.bind(this);
   this.onChangecontactRelationship = this.onChangecontactRelationship.bind(this);
   this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
   this.onChangehomestatus = this.onChangehomestatus.bind(this);
   this.onChangestreetandNumber = this.onChangestreetandNumber.bind(this);
   this.onChangecolony = this.onChangecolony.bind(this);
   this.onChangetownHall = this.onChangetownHall.bind(this);
   this.onChangecp = this.onChangecp.bind(this);
   this.onChangechronicDiseases = this.onChangechronicDiseases.bind(this);
   this.onChangemedicalVoucher = this.onChangemedicalVoucher.bind(this);
   this.onChangebirthCertificate = this.onChangebirthCertificate.bind(this); 
   this.onChangecurpStatus = this.onChangecurpStatus.bind(this);
   this.onChangeproofofAddress = this.onChangeproofofAddress.bind(this);
   this.onChangenoCriminalrecord = this.onChangenoCriminalrecord.bind(this);
   this.onChangeprimer = this.onChangeprimer.bind(this);
   this.onChangeprePrimer = this.onChangeprePrimer.bind(this);
   this.onChangeproofofStudies = this.onChangeproofofStudies.bind(this);
   this.onChangeletterOfrecommendation = this.onChangeletterOfrecommendation.bind(this);
   this.onChangecopyOfIne = this.onChangecopyOfIne.bind(this);
   this.onChangewhoCapturesInformation = this.onChangewhoCapturesInformation.bind(this);
   this.onChangedocumentsReception = this.onChangedocumentsReception.bind(this);
   this.onSubmit = this.onSubmit.bind(this);

   this.state = {
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
   documentsReception:'',
   message:''
   }
}

onChangeid_employe(e){
   this.setState({
            id_employee: e.target.value
   });
}

onChangename(e){
   this.setState({
            name: e.target.value
   });
}

onChangelastnamefat(e){
   this.setState({
           lastnamefat: e.target.value
   });
}
onChangelastnamemoth(e){
   this.setState({
         lastnamemoth: e.target.value
   });
}
onChangeorigin(e){
   this.setState({
         origin: e.target.value
   });
}
onChangebirthdate(e){
   this.setState({
         birthdate: e.target.value
   });
}               
onChangegender(e){
   this.setState({
         gender: e.target.value
   });
}
onChangecivilstatus(e){
   this.setState({
         civilstatus: e.target.value
   });
}
onChangecurp(e){
   this.setState({
         curp: e.target.value
   });
}
onChangerfc(e){
   this.setState({
         rfc: e.target.value
   });
}
onChangeimss(e){
   this.setState({
         imss: e.target.value
   });
}
onChangescholarship(e){
   this.setState({
         scholarship: e.target.value
   });
}
onChangecellphonenumber(e){
   this.setState({
         cellphonenumber: e.target.value
   });
}
onChangeemail(e){
   this.setState({
         email: e.target.value
   });
}
onChangeemergencyContact(e){
   this.setState({
         emergencyContact: e.target.value
   });
}
onChangecontactRelationship(e){
   this.setState({
         contactRelationship: e.target.value
   });
}
onChangecontactNumber(e){
   this.setState({
         contactNumber: e.target.value
   });
}
onChangehomestatus(e){
   this.setState({
         homestatus: e.target.value
   });
}
onChangestreetandNumber(e){
   this.setState({
         streetandNumber: e.target.value
   });
}

onChangecolony(e){
   this.setState({
         colony: e.target.value
   });
}
onChangetownHall(e){
   this.setState({
         townHall: e.target.value
   });
}
onChangecp(e){
   this.setState({
         cp: e.target.value
   });
}
onChangechronicDiseases(e){
   this.setState({
         chronicDiseases: e.target.value
   });
}
onChangemedicalVoucher(e){
   this.setState({
         medicalVoucher: e.target.value
   });
}
onChangebirthCertificate(e){
   this.setState({
         birthCertificate: e.target.value
   });
}
onChangecurpStatus(e){
   this.setState({
         curpStatus: e.target.value
   });
}
onChangeproofofAddress(e){
   this.setState({
         proofofAddress: e.target.value
   });
}

onChangenoCriminalrecord(e){
   this.setState({
         noCriminalRecord: e.target.value
   });
}
onChangeprimer(e){
   this.setState({
         primer: e.target.value
   });
}
onChangeprePrimer(e){
   this.setState({
         prePrimer: e.target.value
   });
}
onChangeproofofStudies(e){
   this.setState({
         proofofStudies: e.target.value
   });
}
onChangeletterOfrecommendation(e){
   this.setState({
         letterOfrecommendation: e.target.value
   });
}
onChangecopyOfIne(e){
   this.setState({
         copyOfIne: e.target.value
   });
}
onChangewhoCapturesInformation(e){
   this.setState({
         whoCapturesInformation: e.target.value
   });
}
onChangedocumentsReception(e){
   this.setState({
         documentsReception: e.target.value
   });
}
onSubmit(e) {
   e.preventDefault();

   console.log(`Form submitted:`);
   console.log(`id_employee: ${this.state.id_employee}`);
   console.log(`name: ${this.state.id_employee}`);
   console.log(`lastnamefat: ${this.state.lastnamefat}`);
   console.log(`lastnamemoth: ${this.state.lastnamemoth}`);
   console.log(`origin: ${this.state.origin}`);
   console.log(`birthdate: ${this.state.birthdate}`);
   console.log(`gender: ${this.state.gender}`);
   console.log(`civilstatus: ${this.state.civilstatus}`);
   console.log(`curp: ${this.state.curp}`);
   console.log(`rfc: ${this.state.rfc}`);
   console.log(`imss: ${this.state.imss}`);
   console.log(`scholarship: ${this.state.scholarship}`);
   console.log(`cellphonenumber: ${this.state.cellphonenumber}`);


   const newTodo = {
   id_employee: this.state.id_employee,
   name: this.state.name,
   lastnamefat: this.state.lastnamefat,
   lastnamemoth: this.state.lastnamemoth,
   origin: this.state.origin,
   birthdate: this.state.birthdate,
   gender: this.state.gender,
   civilstatus: this.state.civilstatus,
   curp: this.state.curp,
   rfc: this.state.rfc,
   imss: this.state.imss,
   scholarship: this.state.scholarship,
   cellphonenumber: this.state.cellphonenumber,
   email: this.state.email,
   emergencyContact: this.state.emergencyContact,
   contactRelationship: this.state.contactRelationship,
   contactNumber: this.state.contactNumber,
   homestatus: this.state.homestatus,
   streetandNumber: this.state.streetandNumber,
   colony: this.state.colony,
   townHall: this.state.townHall,
   cp: this.state.cp,
   chronicDiseases: this.state.chronicDiseases,
   medicalVoucher: this.state.medicalVoucher,
   birthCertificate: this.state.birthCertificate,
   curpStatus: this.state.curpStatus,
   proofofAddress: this.state.proofofAddress,
   noCriminalRecord: this.state.noCriminalRecord,
   primer: this.state.primer,
   prePrimer: this.state.prePrimer,
   proofofStudies: this.state.proofofStudies,
   letterOfrecommendation: this.state.letterOfrecommendation,
   copyOfIne: this.state.copyOfIne,
   whoCapturesInformation: this.state.whoCapturesInformation,
   documentsReception: this.state.documentsReception

}   


axios.post('/api/employees/register', newTodo)
      .then(res => console.log(res.data));

   this.setState({
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

         })
         

}


save(e){
   this.setState({
      message: 'Guardado correctamente'
   })
}
    render() {
        return (
        <div style={{marginTop: 100}} className="contenedor">
          <header className="formulario">   
            <form className="formdatos" onSubmit={this.onSubmit}>

             <div className= "flex-container">

                <div className="flex-container-div">
                   <div className="titulos"><h4>Datos Personales</h4></div>
                     <div className="form-group">
                          <label htmlFor="id_employee">id_Empleado:</label>
                         <input name="id_employee" id="id_employee" type="text" value={this.state.id_employee}  onChange={this.onChangeid_employe}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input name="name" type="text" value={this.state.name} onChange={this.onChangename}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="lastnamefat" >A.Paterno:</label>
                        <input name="lastnamefat" id="lastnamefat" type="text" value={this.state.lastnamefat} onChange={this.onChangelastnamefat}></input>
                     </div>
                     <div  className="form-group">
                        <label htmlFor="lastnamemoth">A.Materno:</label>
                        <input name="lastnamemoth" id="lastnamemoth" type="text" value={this.state.lastnamemoth} onChange={this.onChangelastnamemoth}></input>
                     </div> 
                     <div className="form-group">
                        <label htmlFor="origin">Originario:</label>
                        <input name="origin" id="originario" type="text" value={this.state.origin} onChange={this.onChangeorigin}></input>
                     </div> 
                     <div className="form-group">
                        <label htmlFor="birthdate">Fecha de nacimiento:</label>
                        <input name="birthdate" id="f_nacimiento" type="date" value={this.state.birthdate} onChange={this.onChangebirthdate}></input>
                     </div>
                     <div className="form-group">
                        <label  htmlFor="genero">Genero:</label>
                        <input name="gender"  type="radio" value="Hombre" checked={this.state.gender==='Hombre'} onChange={this.onChangegender}/>Hombre
                        <input name="gender"  type="radio" value="Mujer" checked={this.state.gender==='Mujer'} onChange={this.onChangegender}/>Mujer
                     </div>
                     <div className="form-group">
                        <label  htmlFor="estadocivil">Estado civil:</label>
                        <input  name="civilstatus"  type="radio" value="Casado" checked={this.state.civilstatus==='Casado'} onChange={this.onChangecivilstatus}/>Casado
                        <input  name="civilstatus"  type="radio" value="Soltero"  checked={this.state.civilstatus==='Soltero'} onChange={this.onChangecivilstatus}/>Soltero
                     </div>
                     <div className="form-group">
                        <label  htmlFor="curp">Curp:</label>
                        <input name="curp" id="curp" minLength="18" maxLength="" type="text" value={this.state.curp} onChange={this.onChangecurp}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="rfc">RFC:</label>
                        <input name="rfc" id="rfc"  type="text" value={this.state.rfc} onChange={this.onChangerfc}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="imss">IMSS:</label>
                        <input name="imss" id="imss" type="min" value={this.state.imss} onChange={this.onChangeimss}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="scholarship">Escolaridad:</label>
                        <input name="scholarship" id="escolaridad" type="text" value={this.state.scholarship} onChange={this.onChangescholarship}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="cellphonenumber">Numero Celular:</label>
                        <input name="cellphonenumber" id="celular" type="text" value={this.state.cellphonenumber} onChange={this.onChangecellphonenumber}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Correo:</label>
                        <input name="email" id="email" type="email" value={this.state.email} onChange={this.onChangeemail}></input>
                     </div>

                     <div className="titulos"><h4>Contacto de emergencia</h4></div>
                     <div className="form-group">
                        <label htmlFor="emergencyContact">Nombre:</label>
                        <input name="emergencyContact" id="nom_contacto" type="text" value={this.state.emergencyContact} onChange={this.onChangeemergencyContact}></input>
                     </div> 
                     <div className="form-group">
                        <label htmlFor="contactRelationship">Parentesco:</label>
                        <input name="contactRelationship" id="parentesco" type="text" value={this.state.contactRelationship} onChange={this.onChangecontactRelationship}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="contactNumber">Numero Celular:</label>
                        <input name="contactNumber" id="celular_parentesco" type="text" value={this.state.contactNumber} onChange={this.onChangecontactNumber}></input>
                     </div>
                     
                   </div>  

                   <div className="flex-container-div">
                     <div className="titulos"><h4>Datos de domicilio</h4></div>
                   <div className="form-group">
                        <label htmlFor="homestatus">Casa:</label>
                        <select name="homestatus" id="homestatus" value={this.state.homestatus} onChange={this.onChangehomestatus}>
                        <option value="">Selecciona una opción</option>
                        <option value="Propia">Propia</option>
                        <option value="Rentada">Rentada</option>
                        </select>
                   </div>
                   <div className="form-group">
                        <label htmlFor="streetandNumber">Calle y numero:</label>
                        <input name="streetandNumber" id="calle" type="text" value={this.state.streetandNumber} onChange={this.onChangestreetandNumber}></input>
                     </div>
                     <div className="form-group">
                        <label htmlFor="colony" >Colonia:</label>
                        <input name="colony" id="colonia" type="text" value={this.state.colony} onChange={this.onChangecolony}></input>
                     </div>
   
                     <div className="form-group">
                        <label htmlFor="townHall">Alcaldia:</label>
                        <input name="townHall" id="alcaldia" type="text" value={this.state.townHall} onChange={this.onChangetownHall}></input>
                     </div> 
                     <div className="form-group">
                        <label htmlFor="cp">CP:</label>
                        <input name="cp" id="codigopostal" type="text" value={this.state.cp} onChange={this.onChangecp}></input>
                     </div>

                        <div className="titulos"><h4>Estado Medico</h4></div> 

                        <div className="form-group">
                           <label htmlFor="chronicDiseases">Enfermedades cronicas:</label>
                           <input name="chronicDiseases" id="chronicDiseases" type="text" value={this.state.chronicDiseases} onChange={this.onChangechronicDiseases}></input>
                        </div>

                        <div className="form-group">
                           <label htmlFor="medicalVoucher" >Comprobante medico:</label>
                           <input name="medicalVoucher" id="comp_medico" type="text" value={this.state.medicalVoucher} onChange={this.onChangemedicalVoucher}></input>
                        </div>
                      
                      </div>
                

            <div className="flex-container-div">
              
                       <div className="titulos"><h4>Documentacion</h4></div>

                         <div className="form-group">
                           <label htmlFor="birthCertificate">Acta de nacimiento:</label>

                              <select name="birthCertificate" id=" birthCertificate" value={this.state.birthCertificate} onChange={this.onChangebirthCertificate} >
                              <option value="">Selecciona una opción</option>
                              <option value="no_entrega">no entrega</option>
                              <option value="buen_estado">Buen estado</option>
                              <option value="buen_estado">Mal estado</option>
                              </select>
                        </div>


                      <div className="form-group">
                              <label htmlFor="curpStatus">Curp:</label>
                              <select name="curpStatus" id="Estatus_curp" value={this.state.curpStatus} onChange={this.onChangecurpStatus}>
                              <option value="">Selecciona una opción</option>
                              <option value="no_entrega">no entrega</option>
                              <option value="buen_estado">Buen estado</option>
                              <option value="buen_estado">Mal estado</option>
                              </select>
                      </div> 

                  
                   <div className="form-group">
                        <label htmlFor="proofofAddress">Comprobante de domicilio:</label>
                        <select name="proofofAddress" id="estatus_com_dom" value={this.state.proofofAddress} onChange={this.onChangeproofofAddress} >
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="form-group">
                        <label htmlFor="noCriminalRecord">Antecedentes no penales:</label>
                        <select name="noCriminalRecord" id="estatus_antecedentes"  value={this.state.noCriminalRecord} onChange={this.onChangenoCriminalrecord} >
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="form-group">
                        <label htmlFor="primer">Cartilla:</label>
                        <select name="primer" id="estatus_cartilla" value={this.state.primer} onChange={this.onChangeprimer}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>

                  <div className="form-group">
                        <label htmlFor="prePrimer">Pre-Cartilla:</label>
                        <select name="prePrimer" id="estatus_precartilla" value={this.state.prePrimer} onChange={this.onChangeprePrimer} >
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>

                    <div className="form-group">
                        <label htmlFor="proofofStudies">Comprobante de estudios:</label>
                        <select name="proofofStudies" id="comprob_estudio" value={this.state.proofofStudies} onChange={this.onChangeproofofStudies} >
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div>
                   <div className="form-group">
                        <label htmlFor="letterOfrecommendation">Cartas de recomendación:</label>
                        <select name="letterOfrecommendation" id="cartas_recomendacion" value={this.state.letterOfrecommendation} onChange={this.onChangeletterOfrecommendation} >
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div> 
                   <div className="form-group">
                        <label htmlFor="copyOfIne">Copia de INE:</label>
                        <select name="copyOfIne" id="ine" value={this.state.copyOfIne} onChange={this.onChangecopyOfIne}>
                        <option value="">Selecciona una opción</option>
                        <option value="no_entrega">no entrega</option>
                        <option value="buen_estado">Buen estado</option>
                        <option value="buen_estado">Mal estado</option>
                        </select>
                   </div> 

                      <div className="titulos"><h4>Información adicional</h4></div> 


                     <div className="form-group">
                        <label htmlFor="whoCapturesInformation">Quien captura Información:</label>
                        <input name="whoCapturesInformation" id="quien_captura" type="text" value={this.state.whoCapturesInformation} onChange={this.onChangewhoCapturesInformation}></input>
                     </div> 
                     <div className="form-group">
                        <label htmlFor="documentsReception">Recepción de documentos:</label>
                        <input name="documentsReception" id="captura_información" type="text" value={this.state.documentsReception} onChange={this.onChangedocumentsReception}></input>
                     </div>
                     
                      
                    
                    <div className="form-group">
                    <input type="submit" value="Guardar" className="btn btn-primary" />
                    <span style={{color: 'green'}}>{this.state.message}</span>
                    </div>
                    </div>
                     

                  
                     </div>
                     <div style={{width:'30%', height:'200px'}} >
                        <span>{JSON.stringify(this.state)}</span>
                     </div>

             </form>
             </header>
         
             </div>


        );
    }
}

export default Formcontratacion;