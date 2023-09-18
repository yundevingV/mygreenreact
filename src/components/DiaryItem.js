import React from "react";
import styled from "styled-components";

const Container = styled.div`

margin:0 auto;

display : flex;
flex-direction : column;
`

const ItemContainer = styled.div`
margin:0 auto;
width : 100%;


`

const Box = styled.div`
    display: flex;

    width : 100%;
    height : 120px;
    
    margin: 10px 0px;

    border-radius : 4px;
    
    &:hover {
        background-color : #e2e2e2;
        cursor : pointer;
    }

`

const ItemImg = styled.img`

width : 30%;
height: 70%;

max-width : 100px;

padding : 10px;
border-radius : 12px;

`

const Contents = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;
    padding : 10px;

`
const Hr = styled.hr`
`

const Title = styled.div`

    width : 100%;

    display: -webkit-box;
    -webkit-line-clamp: 1; /* Limit to two lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
span{
    font-size: 1rem;
    font-family: H;
}

`

const Content = styled.div`
    height: 50px;
  span {
    font-size: 0.8rem;
    font-family: EB;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limit to two lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Date = styled.span`
    font-family: SB;
    font-size: 0.9rem;
`

export default function DiaryItem(props){
  // Base64 이미지 디코딩
  const decodeBase64 = (base64) => {
    const decodedImage = `data:image/jpeg;base64,${base64}`;
    return decodedImage;
  };

  const decodedImage = decodeBase64(props.item.image);

    return (
            <Container>

                    <ItemContainer>
                        <Box>
                            
                            <ItemImg src={decodedImage} alt='x' />
                            
                            <Contents>
                                <Title>
                                    <span>
                                        {props.item.title}
                                        
                                    </span>
 
                                </Title>
                                <Content>
                                    <span>{props.item.content}</span>
                                </Content>
                                <Date>
                                    {props.item.date.split('T')[0].replace(/-/g, '.')}
                                </Date>
                            </Contents>
                        </Box>
                        <Hr />
                    </ItemContainer>

                    
            </Container>
    );
}

