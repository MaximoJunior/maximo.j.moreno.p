import React from 'react';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import './UserList.css';

export const UserList = () => {

    const { data } = useFetchUsers();
    const { users } = data;


    return (
        <div className="container-list">
             <h1>Lista de Usuarios con su Departamento</h1>
            <ul className="list-group list-group-flush">
                 {
                    users.map( user => (
                        <li key={ user.id } className="list-group-item">
                            { `${user.name} ${user.lastName}` }
                            <span className="dpName">{ user.department.name }</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
