import React from "react";

import styled from "styled-components";


const Container = styled.div`
`;

const Box = styled.div`
    display: flex;
    flex-direction : column;
    background : #e2e2e2;

    border-radius : 12px;

    margin-bottom : 12px;

    `;

const TBox = styled.div`
  width: 90%; 
  padding : 0% 5%;
  padding-top : 5%;
  display : flex;
  justify-content : flex-start;
`;

const Name = styled.span`
  font-family: SB;
  margin-right: 10px;
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

export default function BoardDetail(props) {
    console.log(props)
    return (
    <>
        <Container>
            {props.item.map((item,idx) =>
            <Box>
                <TBox>
                    <Name>
                        {item.writer}
                    </Name>
                    <Date>
                        
                    </Date>
                </TBox>

                <BBox>
                    <Content>
                        {item.content}

                    </Content>
                </BBox>
            </Box>
            )}

        </Container>
    </>
    );
}
