import React from "react";
import styled from "styled-components";
import rupy from "../../assets/img/rupy.jpg"

const Container = styled.div`


    display: flex;
    flex-direction: column;

`;

const Box = styled.div`
    margin : 0 auto;
`
const ImgBox = styled.div`

`

const Img = styled.img`
border-radius : 12px;
`

const TBox = styled.div`
    display: flex;
    justify-content : flex-start;
    padding : 10px;
`
const Date = styled.span`

`

const BBox = styled.div`
    display: flex;
    justify-content : flex-start;
    padding : 20px 10px;

    background-color : #e2e2e2;
    border-radius : 12px;
`

const Content = styled.span`
`

export default function BoardDetail(){
    return(
        <>
            <Container>
                <Box>
                    <ImgBox>
                        <Img src={rupy} alt='x' />
                    </ImgBox>

                    <TBox>
                        <Date>
                            2023.08.28 <span> 😍</span>
                        </Date>
                    </TBox>

                    <BBox>
                        <Content>
                            내용
                        </Content>
                    </BBox>
                </Box>

            </Container>
        </>
    )
}

