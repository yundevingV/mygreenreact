import React, { useEffect, useState } from 'react';
import BoradItem from '../../components/BoardItem';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Board(){

    const stateCookie = useSelector
    ((state)  => state.CookieReducer.cookie)

    const [page,setPage] = useState(1);
    const [data,setData] =useState();
    const [totalpage,setTotalPage] = useState();

    useEffect(() => {        
        axios
            .get(`https://iotvase.azurewebsites.net/community/board/${page}`, {
               
                headers: {
                    // Cookie: stateCookie,
                }
            })
            .then((response) => {
                console.log(response);
                setTotalPage(response.data.totalpage);
                setData(response.data);

                console.log('success')

            })
            .catch((error) => {
                console.log('fail');
            });
    }, [page]);
    
    return(
        <>

            {data ? <BoradItem item={data}/> : <></>}
        </>

    )
}