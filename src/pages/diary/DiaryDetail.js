import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import BackButton from "../../components/common/Back";

import styled from "styled-components";

import axios from "axios";

import DiaryItem from "../../components/DiaryItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: left; /* Align text to the left */
`;


export default function DiaryDetail() {

    const stateCookie = useSelector
    ((state)  => state.CookieReducer.cookie)

    let {id} = useParams();
    console.log(id)

    const[data,setData] = useState('');
    
    useEffect(() => {        
        axios
            .get(`https://iotvase.azurewebsites.net/community/read/${id}`, {
                headers: {
                }
            })
            .then((response) => {
                console.log(response);
                setData(response.data);
                console.log('success')

            })
            .catch((error) => {
                console.log('fail');
            });
    }, []);

  return (
    <>

      <Container>
        <DiaryItem item={data} />


      </Container>
    </>
  );
}
