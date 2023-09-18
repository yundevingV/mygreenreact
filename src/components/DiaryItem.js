import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";



import styled from "styled-components";



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
  font-family: B;
`;
const Title = styled.h3`
  font-family: EB;
`;
const EBox = styled.div`
  width: 70%; 
  border-radius: 12px;
  
  padding : 1% 5%;

  display: flex;
`;

const Hr = styled.hr``


export default function DiaryDetail(props) {

    const stateCookie = useSelector
    ((state)  => state.CookieReducer.cookie)

    let {id} = useParams();
    console.log(id)
  // Base64 이미지 디코딩
  const decodeBase64 = (base64) => {
    const decodedImage = `data:image/jpeg;base64,${base64}`;
    return decodedImage;
  };

  const decodedImage = decodeBase64(props.item.image);
    
  return (
    <>
      <Container>
        <Box>
          <ImgBox>
            <Img src={decodedImage} alt='x' />
          </ImgBox>

          <TBox>
          <Date>{props.item.date ?
                <>{props.item.date.split('T')[0].replace(/-/g, '.')}
                {props.item.emotion}
                </>
              : <></>}
              
              </Date>
          </TBox>

          <BBox>
            <Title>
            {props.item.title}
            </Title>

            <Content>
              {props.item.content}
            </Content>
          </BBox>

         

        </Box>


      </Container>
    </>
  );
}