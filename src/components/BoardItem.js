import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // react-router-dom 라이브러리 가져오기
import BackButton from "./common/Back";

// Link 컴포넌트에 스타일 추가
const StyledLink = styled(Link)`
  text-decoration: none; /* 하이퍼링크 텍스트 밑줄 제거 */
  color: inherit; /* 기본 텍스트 색상으로 설정 */
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  margin: 10px 0px;
  border-radius: 4px;

  &:hover {
    background-color: #e2e2e2;
    cursor: pointer;
  }
`;

const ItemImg = styled.img`
  width: 30%;
  height: 70%;
  max-width: 100px;
  padding: 10px;
  border-radius: 12px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

const Hr = styled.hr``;

const Title = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    font-size: 1rem;
    font-family: H;
  }
`;

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
`;

export default function BoradItem(props) {
  let post = props?.item?.posts;

  const decodeBase64 = (base64) => {
    const decodedImage = `data:image/jpeg;base64,${base64}`;
    return decodedImage;
  };

  return (
    <Container>
      <ItemContainer>
        {post?.map((item, index) => (
          // StyledLink 컴포넌트로 Link 감싸기
          <StyledLink to={`./detail/${item._id}`} key={item._id}>
            <Box>
              {/* 이미지를 표시하려면 이미지 URL을 사용하도록 수정 */}
              <ItemImg src={decodeBase64(item.image)} alt='x' />
              <Contents>
                <Title>
                  <span>{item.title}</span>
                </Title>
                <Content>
                  <span>{item.content}</span>
                </Content>
                <Date>
                  {item.date ? (
                    <>{item.date.split('T')[0].replace(/-/g, '.')}</>
                  ) : (
                    <></>
                  )}
                </Date>
              </Contents>
            </Box>
            <Hr />
          </StyledLink>
        ))}
      </ItemContainer>
    </Container>
  );
}
