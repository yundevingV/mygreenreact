import React, { useEffect, useState } from 'react';
import BoradItem from '../../components/BoardItem';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Board(){

    const stateCookie = useSelector
    ((state)  => state.CookieReducer.cookie)

    const [page,setPage] = useState(0);

    useEffect(() => {        
        axios
            .get(`https://iotvase.azurewebsites.net/green/diary/:${page}`, {
               
                headers: {
                    Cookie: stateCookie,
                }
            })
            .then((response) => {
                console.log('success')

            })
            .catch((error) => {
                console.log('error')
            });
    }, []);

    return(
        <>
            <BoradItem />
        </>

    )
}