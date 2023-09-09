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
    
    margin: 20px 0px;
    

    border-radius : 4px;
    
    &:hover {
        background-color : #e2e2e2;
        cursor : pointer;
    }

`

const ItemImg = styled.img`

padding : 10px;

border-radius : 20px;

`

const Contents = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;

    padding : 10px 20px;

`
const Hr = styled.hr`
`

const Title = styled.div`

span{
    font-size : 18px;
    font-family: H;
}

`

const Content = styled.div`

span {
    font-size : 15px;
    font-family : EB;

}
`


export default function BoradItem(){
    return (
            <Container>

                    <ItemContainer>
                        <Box>
                            
                            <ItemImg src={rupy} alt='x' />
                            
                            <Contents>
                                <Title>
                                    <span>일기제목</span>
                                </Title>
                                <Content>
                                    <span>본문</span>
                                </Content>
                                
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
                                    <span>본문</span>
                                </Content>
                                
                            </Contents>
                        </Box>
                    </ItemContainer>
            </Container>
    );
}

