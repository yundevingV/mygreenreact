import React from "react";
import styled from "styled-components";
import rupy from "../../assets/img/rupy.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: left; /* Align text to the left */
`;

const Box = styled.div`
margin : 0 auto;
  width: 90%; /* Make it take full width */
  max-width: 800px; /* Set a maximum width for content */
  padding: 16px; /* Add padding for spacing */
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center; /* Center the photo horizontally */
`;

const Img = styled.img`
  border-radius: 12px;
  width: 90%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
`;

const TBox = styled.div`
  width: 90%; /* Make it take full width */
  padding : 5%;

`;

const Date = styled.span`
  font-family: SB;
`;

const BBox = styled.div`
  width: 90%; /* Make it take full width */
  border-radius: 12px;
  padding : 5%;
`;

const Content = styled.span`
  font-family: EB;
`;

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
              내용
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용

            </Content>
          </BBox>
        </Box>
      </Container>
    </>
  );
}
