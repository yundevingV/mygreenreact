import React, { useEffect, useState } from 'react';
import BoradItem from '../../components/BoardItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/common/Back';
import styled from 'styled-components';
import { setCookie } from '../../reducer/save_cookie';
import { useParams } from 'react-router';
import Pagination from '../../components/common/Paging';

const SizedBox = styled.div`
height: 20px;
`

export default function Board(){


    const dispatch = useDispatch();
    
    const page = useSelector
    ((state)  => state.pageReducer.page)

    let id = useParams();


    const [data,setData] =useState();
    const [totalPage,setTotalPage] = useState(1);
    
    useEffect(() => {        
        axios
            .get(`https://iotvase.azurewebsites.net/community/board/${page}`, {
               
                headers: {
                    // Cookie: stateCookie,
                }
            })
            .then((response) => {
                console.log(response);
                setTotalPage(response.data.totalPages);

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
            <SizedBox />
            <SizedBox />

            <Div>
            {data && (
                <>
                    <Pagination totalPage={totalPage} />
                </>
                )}


            </Div>
        </>

    )
}

const Div = styled.div`
  margin: 0 auto;
  text-align: center; /* 가운데 정렬을 추가 */
`;
