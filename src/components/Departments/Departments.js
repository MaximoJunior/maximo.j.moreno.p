import React, { useRef } from 'react'
import { saveDepartment } from '../../helpers/departmentRequestHttp';
import { useFetchDepartments } from '../../hooks/useFetchDepartments';
import { useForm } from '../../hooks/useForm'
import { DepartmentList } from '../DepartmentList/DepartmentList'

export const Departments = () => {


    const initialState = { name:"", code: "" };

    const [ fields, handleInputChange, reset ] = useForm( initialState );
    const { code, name } = fields;

    const { data } = useFetchDepartments();
    const { departments } = data;

    const alertSuccess = useRef(null);
    const alertDanger = useRef(null);

    const handleSubmit = async (e) => {
            e.preventDefault();

            // Request HTTP
            const answer = await saveDepartment( fields );

            let timeoutId = null;
            if( answer && answer.message === "OK"){

                    alertSuccess.current.classList.add('show-advice');

                    timeoutId = setTimeout( () => {
                        alertSuccess.current.classList.remove('show-advice');
                        clearTimeout( timeoutId );
                    }, 2000 );

            }else {

                    alertDanger.current.classList.add('show-advice');

                    timeoutId = setTimeout( () => {
                    alertDanger.current.classList.remove('show-advice');
                    clearTimeout( timeoutId );
                    }, 1500 );

            }
            
            reset();
    }

    return (
        <div>
              
            <form onSubmit={ handleSubmit } className="row g-3">
                <div className="col-6">
                    <label htmlFor="inputCode" className="col-sm-2 col-form-label">Codigo</label>
                    <div className="col-sm-12">
                       <input value={ code } onChange={ handleInputChange } name="code" required type="text" className="form-control" id="inputCode"/>
                    </div>
                </div>
                <div className="col-6">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-12">
                        <input value={ name } onChange={ handleInputChange } name="name" required type="text"  className="form-control" id="inputName"/>
                    </div>
                </div>
                <div className="row p-2">
                    <button type="button" onClick = { reset  } className="btn btn-primary bg-danger col-3">Reset</button>
                    <button type="submit" className="btn btn-primary col-8">Agregar Departamento</button>
                </div>
               
                <div className="alert alert-success" ref={ alertSuccess } role="alert">
                      Departamento Agregado!
                </div>

                <div className="alert alert-danger" ref={ alertDanger } role="alert">
                      Error, departamento no agregado.
                </div>
            </form>

            <DepartmentList listDepartments={ departments } />

        </div>
    )
}
