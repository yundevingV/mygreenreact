import React, { useEffect, useState } from 'react';
import BoradItem from '../../components/BoardItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/common/Back';
import styled from 'styled-components';
import { setCookie } from '../../reducer/save_cookie';
import { useParams } from 'react-router';

const SizedBox = styled.div`
height: 20px;
`

export default function Board(){



    const dispatch = useDispatch();
    let id = useParams();

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

                dispatch(setCookie(id));

            })
            .catch((error) => {
                console.log('fail');
            });
    }, [page]);
    
    return(
        <>
            <BackButton />
            <SizedBox />
            {data ? <BoradItem item={data}/> : <></>}
        </>

    )
}