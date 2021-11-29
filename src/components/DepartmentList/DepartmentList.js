import React from 'react';
import { useFetchDepartments } from '../../hooks/useFetchDepartments';
import './DepartmentList.css';


export const DepartmentList = ({ listDepartments = [] } ) => {
       
    return (
        <div className="container-list">
                <h1>Lista de departamentos</h1>
            <ul className="list-group list-group-flush">
                {
                    listDepartments.map( dpt => (<li key={ dpt.id } className="list-group-item">{ dpt.name }</li>))
                }
            </ul>
        </div>
    )
}
