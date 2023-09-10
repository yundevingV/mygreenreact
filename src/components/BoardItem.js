import React from "react";
import styled from "styled-components";
import rupy from "../assets/img/rupy.jpg"

const Container = styled.div`

margin:0 auto;

display : flex;
flex-direction : column;
`

const ItemContainer = styled.div`
margin:0 auto;
width : 70%;
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
    font-size : 12px;
    font-family: H;
}

`

const Content = styled.div`
    height: 50px;
  span {
    font-size: 10px;
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
    font-size: 9px;


`
export default function BoradItem(){
    return (
            <Container>

                    <ItemContainer>
                        <Box>
                            
                            <ItemImg src={rupy} alt='x' />
                            
                            <Contents>
                                <Title>
                                    <span>
                                        일기제목일기제목일기제목일기제목일기제목일기제목일기제목일기제목일기제목일기제목일기제목일기제목                                
                                        
                                    </span>
 
                                </Title>
                                <Content>
                                    <span>본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문본문본문문</span>
                                </Content>
                                <Date>
                                    2023.08.29
                                </Date>
                            </Contents>
                        </Box>
                        <Hr />
                    </ItemContainer>

                    <ItemContainer >
                        <Box>
                            
                            <ItemImg src={rupy} alt='x' />
                            
                            <Contents>
                                <Title>
                                    <span>일기제목</span>
                                </Title>
                                <Content>
                                    <span>본</span>
                                </Content>
                                <Date>
                                        2023.08.29
                                </Date>
                            </Contents>
                        </Box>
                    </ItemContainer>
            </Container>
    );
}

