import { useState, useEffect } from "react"
import { getUsers } from "../helpers/userRequestHttp";


export const useFetchUsers = (limit = null, offset = null ) => {

    const initialState = { data:{ total:0, users:[] }, loading:true };
    const [ data, setData ] = useState( initialState );

    useEffect(() => {

        getUsers().then( data => {
            setData( {data , loading:false} );
        })
        // return () => {
        //     cleanup
        // }
    },[limit, offset]);


    return data
}