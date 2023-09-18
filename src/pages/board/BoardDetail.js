import React,{useEffect , useState} from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

import DiaryItem from "../../components/DiaryItem";

import CommentList from "../../components/comment/CommentList";

import styled from "styled-components";
import CommentAdd from "../../components/comment/CommentAdd";

import axios from "axios";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: left; /* Align text to the left */
`;

const Box = styled.div`
  margin : 0 auto;
  width: 70%; 
  max-width: 800px; /* Set a maximum width for content */
  padding: 16px; /* Add padding for spacing */
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center; /* Center the photo horizontally */
`;

const Img = styled.img`
  border-radius: 12px;
  width: 70%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
`;

const TBox = styled.div`
  width: 70%; 
  padding : 5%;

`;

const Date = styled.span`
  font-family: SB;
`;

const BBox = styled.div`
  width: 90%; 
  border-radius: 12px;
  padding : 5%;
`;

const Content = styled.span`
  font-family: EB;
`;

const EBox = styled.div`
  width: 70%; 
  border-radius: 12px;
  
  padding : 1% 5%;

  display: flex;
`;

const Icon = styled.img`
width: 20px;

margin : 0px 10px;

`
const Hr = styled.hr``

const CBox = styled.div`
  width: 100%; 
  border-radius: 12px;
  padding : 0%;
`

export default function BoardDetail() {

  const stateCookie = useSelector
  ((state)  => state.CookieReducer.cookie)

  let {id} = useParams();
  console.log(id)
  
  const [data,setData] = useState('');

  useEffect(() => {        
      axios
          .get(`https://iotvase.azurewebsites.net/community/read/${id}`, {             
              headers: {
                  // Authorization : stateCookie,
              }
          })
          .then((response) => {
              setData(response.data);
              console.log(response);
              console.log('success')

          })
          .catch((error) => {
              console.log('fail');
          });
  }, []);

  return (
    <>
      <Container>
        <Box>
          <DiaryItem item={data} />

          <CBox>
            <CommentList />
            <CommentAdd />
          </CBox>

        </Box>


      </Container>
    </>
  );
}
