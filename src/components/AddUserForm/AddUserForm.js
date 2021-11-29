import React, { useRef } from 'react';
import { maskText } from '../../helpers/maskText';
import { saveUser } from '../../helpers/userRequestHttp';
import { useFetchDepartments } from '../../hooks/useFetchDepartments';
import { useForm } from '../../hooks/useForm';
import './AddUserForm.css';

export const AddUserForm = () => {

    const initialState = { 
            name : "",
            lastName: "", 
            gender: "", 
            number_ID: "", 
            birthDate: Date.now(), 
            department:"", 
            position: "", 
            supervisor:"" 
        };

    const [ fields , handleInputChange, reset ] = useForm( initialState );
    const{  
            name, 
            lastName, 
            gender, 
            number_ID, 
            birthDate,
            department,
            position, 
            supervisor } = fields;


    // Get departments
    const { data } = useFetchDepartments();
    const { departments } = data;

    const alertSuccess = useRef(null);
    const alertDanger = useRef(null);
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
         
        // Request HTTP
        const newFieldsValues = { ...fields };
        newFieldsValues.birthDate = new Date( ...newFieldsValues.birthDate.split("-"));
        const answer = await saveUser(  newFieldsValues );

        let timeoutId = null;
        if( answer && answer.message === "OK"){

            

             alertSuccess.current.classList.add('show-advice');

             timeoutId = setTimeout( () => {
                  alertSuccess.current.classList.remove('show-advice');
                  clearTimeout( timeoutId );
             }, 2000 );

         }else {

            console.log( answer );

             alertDanger.current.classList.add('show-advice');

             timeoutId = setTimeout( () => {
                alertDanger.current.classList.remove('show-advice');
                clearTimeout( timeoutId );
             }, 1500 );

         }
       
         reset();

    }

    //Prevent to enter letters to cedula field
    const handleKeyDown = (e) => {
        if(e.charCode < 48 || e.charCode > 57){
            e.preventDefault();
        }
    }

    return (
        <>
            <h1>Agregar Usuario</h1>

            <form onSubmit={ handleSubmit }>

                <div className="row mb-3">
                    <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                    <input value={ name } onChange={ handleInputChange } name="name" required type="text" className="form-control" id="inputNombre"/>
                    </div>
                </div>
                <div className="row row-3">
                    <label htmlFor="inputApellido" className="col-sm-2 col-form-label">Apellido</label>
                    <div className="col-sm-10">
                    <input value={ lastName } onChange={ handleInputChange } name="lastName" type="text" required className="form-control" id="inputApellido"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Genero</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                    <label className="form-check-label">
                        <input  onChange={ handleInputChange } value="FEMALE" checked={ gender === 'FEMALE' } required className="form-check-input" type="radio" name="gender" id="gridRadios1" />
                           Femenino
                        </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label" >
                        <input onChange={ handleInputChange }  value="MALE" checked={ gender === 'MALE' } required className="form-check-input" type="radio" name="gender" id="gridRadios2" />
                           Masculino
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputCedula" className="col-sm-2 col-form-label">Cedula</label>
                    <div className="col-sm-10">
                    <input 
                           value={ maskText( number_ID ) } 
                           onChange={ 
                               handleInputChange
                           } 
                           onKeyPress={ handleKeyDown }
                           name="number_ID" type="text" 
                           maxLength="13" 
                           required
                           placeholder="000-0000000-0" 
                           className="form-control" 
                           id="inputCedula"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="birthDate" className="col-sm-2 col-form-label">Fecha de Nacimiento</label>
                    <div className="col-sm-10">
                    <input value={ birthDate } onChange={ handleInputChange } name="birthDate" type="date" required className="form-control" id="inputbirthDate"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputdepartment" className="col-sm-2 col-form-label">department</label>
                    <div className="col-sm-10">
                    <select onChange={ handleInputChange } value={ department } name="department" required id="inputdepartment" className="form-select form-control">
                       <option value="" defaultValue>----</option>
                       { 
                         departments.map( item => (<option value={ item.id } key={ item.id }> { item.name } </option>))
                       }

                    </select>
                    
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputposition" className="col-sm-2 col-form-label">position</label>
                    <div className="col-sm-10">
                    <input value={ position } onChange={ handleInputChange } name="position" required type="text" className="form-control" id="inputposition"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputposition" className="col-sm-2 col-form-label">Supervisor Inmediato</label>
                    <div className="col-sm-10">
                    <input value={ supervisor } onChange={ handleInputChange } name="supervisor" required type="text" className="form-control" id="inputposition"/>
                    </div>
                </div>
                <div className="row mb-0 p-3">
                    <button type="button" onClick = { reset  } className="btn btn-primary bg-danger col-3">Reset</button>
                    <button type="submit" className="btn btn-primary col-8">Agregar Usuario</button>
                </div>
               
                <div className="alert alert-success" ref={ alertSuccess } role="alert">
                      Usuario Agregado!
                </div>

                <div className="alert alert-danger" ref={ alertDanger } role="alert">
                      Error, usuario no agregado.
                </div>

          </form>
        </>
    )
}




