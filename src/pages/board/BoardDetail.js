import React,{useEffect , useState} from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

import DiaryItem from "../../components/DiaryItem";
import BackButton from "../../components/common/Back";
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
  width: 90%; 
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


const Hr = styled.hr``

const CBox = styled.div`
  width: 100%; 
  border-radius: 12px;
  padding : 0%;
`

export default function BoardDetail() {

  const userid = useSelector
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
              console.log(response.data.comments);
              console.log('success')

          })
          .catch((error) => {
              console.log('fail');
          });
  }, []);

  return (
    <>
          <BackButton />

      <Container>
        <Box>
          <DiaryItem item={data} />

          <Hr />
          <CBox>
            {data.comments ? 
            <CommentList item={data?.comments} />
            :
            <></>
}

            <CommentAdd userid={userid} />
          </CBox>

        </Box>


      </Container>
    </>
  );
}
