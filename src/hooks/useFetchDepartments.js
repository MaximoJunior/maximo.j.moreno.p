import { useState, useEffect } from "react"
import { getDepartments } from "../helpers/departmentRequestHttp";


export const useFetchDepartments = (limit = null, offset = null ) => {

    const initialState = { data:{ total:0, departments:[] }, loading:true };
    const [ data, setData ] = useState( initialState );

    useEffect(() => {

        getDepartments().then( data => {
            setData( {data , loading:false} );
            console.log( "fetch")
        })
        // return () => {
        //     cleanup
        // }
    },[]);


    return data
}