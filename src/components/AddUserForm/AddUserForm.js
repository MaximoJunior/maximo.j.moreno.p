import React from 'react';
import { saveUser } from '../../helpers/saveUser';
import { useForm } from '../../hooks/useForm';
import './AddUserForm.css';

export const AddUserForm = () => {

    const initialState = { 
            nombre : "",
            apellido: "", 
            genero: "", 
            cedula: "", 
            fechaNacimiento: Date.now(), 
            departamento:"", 
            cargo: "", 
            supervisorInmediato:"" 
        };


    // Simulacion de departamentos 
    const departamentos = [ { nombre: "Departamento 1", codigo: 1 }, { nombre: "Departamento 2", codigo: 5 } ];

    const [ 
            { nombre, 
              apellido, 
              genero, 
              cedula, 
              fechaNacimiento,
              departamento,
              cargo, 
              supervisorInmediato 
            }, 
            handleInputChange, 
            reset ] = useForm( initialState );



    const handleSubmit = (e) =>{
        e.preventDefault();
        // Hacer solicitud HTTP

        // saveUser(  { nombre, 
        //     apellido, 
        //     genero, 
        //     cedula, 
        //     fechaNacimiento,
        //     departamento,
        //     cargo, 
        //     supervisorInmediato 
        //   } );

        console.log( "data to save", { nombre, 
               apellido, 
               genero, 
               cedula, 
               fechaNacimiento,
               departamento,
               cargo, 
               supervisorInmediato 
             } );

        // Clean form
          reset();


    }

    return (
        <>
            <h1>Agregar Usuario</h1>

            <form onSubmit={ handleSubmit }>

                <div className="row mb-3">
                    <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                    <input value={ nombre } onChange={ handleInputChange } name="nombre" type="text" className="form-control" id="inputNombre"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputApellido" className="col-sm-2 col-form-label">Apellido</label>
                    <div className="col-sm-10">
                    <input value={ apellido } onChange={ handleInputChange } name="apellido" type="text" className="form-control" id="inputApellido"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Genero</legend>
                    <div className="col-sm-10">
                    <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="genero" id="gridRadios1" onChange={ handleInputChange } value="F" checked={ genero === 'F' } />
                           Femenino
                        </label>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label" >
                        <input className="form-check-input" type="radio" name="genero" id="gridRadios2" onChange={ handleInputChange }  value="M" checked={ genero === 'M' }/>
                           Masculino
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputCedula" className="col-sm-2 col-form-label">Cedula</label>
                    <div className="col-sm-10">
                    <input value={ maskText( cedula ) } onChange={ handleInputChange  } name="cedula" type="text" maxLength="13" placeholder="000-0000000-0" className="form-control" id="inputCedula"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="FechaNacimiento" className="col-sm-2 col-form-label">Fecha de Nacimiento</label>
                    <div className="col-sm-10">
                    <input value={ fechaNacimiento } onChange={ handleInputChange } name="fechaNacimiento" type="date" className="form-control" id="inputFechaNacimiento"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputDepartamento" className="col-sm-2 col-form-label">Departamento</label>
                    <div className="col-sm-10">
                    <select onChange={ handleInputChange } value={ departamento } name="departamento" id="inputDepartamento" className="form-select">

                       { 
                           departamentos.map( item => (<option value={ item.codigo } key={ item.codigo } > { item.nombre } </option>))
                       }

                    </select>
                    
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputCargo" className="col-sm-2 col-form-label">Cargo</label>
                    <div className="col-sm-10">
                    <input value={ cargo } onChange={ handleInputChange } name="cargo" type="text" className="form-control" id="inputCargo"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputCargo" className="col-sm-2 col-form-label">Supervisor Inmediato</label>
                    <div className="col-sm-10">
                    <input value={ supervisorInmediato } onChange={ handleInputChange } name="supervisorInmediato" type="text" className="form-control" id="inputCargo"/>
                    </div>
                </div>
                <button type="button" onClick = { reset  } className="btn btn-primary bg-danger m-5">Reset</button>
                <button type="submit" className="btn btn-primary">Agregar Usuario</button>

          </form>
        </>
    )
}



// mask text  [###-#######-#] 
const maskText = ( text ) => {

     let newText = text.replace( "-", "" ).split( "" );

     if( newText.length > 3){

        newText.splice(3, 0, '-');
     }

     if( newText.length >= 12 && newText[11] !== "-" ) {
        newText.splice( 11, 0, '-');
     }

     return newText.join("");
}
