import React from "react";

import rupy from "../../assets/img/rupy.jpg";

import regularHeart from "../../assets/icons/heart-regular.svg";
import solidHeart from "../../assets/icons/heart-solid.svg";
import regularComment from "../../assets/icons/comment-regular.svg";
import solidComment from "../../assets/icons/comment-solid.svg";
import regularStar from "../../assets/icons/star-regular.svg";
import solidStar from "../../assets/icons/star-solid.svg";

import CommentList from "../../components/CommentList";

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
  return (
    <>
      <Container>
        <Box>
          <ImgBox>
            <Img src={rupy} alt='x' />
          </ImgBox>

          <TBox>
            <Date>
              2023.08.28 <span> 😍 </span>
            </Date>
          </TBox>

          <BBox>
            <Content>
              오늘은 소풍을 해서 즐거웠다 날이 더웠지만 친구들과 재밌게 놀아서 좋았다.

            </Content>
          </BBox>

          <EBox>

            {true ? <Icon src={regularHeart} alt = 'x'/> : <Icon src={solidHeart} alt = 'x'/> }
            1
            {true ? <Icon src={regularComment} alt ='x'/> : <Icon src={solidComment} alt='x' />}
            2
            {true ? <Icon src={regularStar} alt ='x'/> : <Icon src={solidStar} alt='x' /> }
            0
            
          </EBox>

          <Hr />

          <CBox>
            <CommentList />
          </CBox>

        </Box>


      </Container>
    </>
  );
}
