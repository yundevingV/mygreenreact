import styled from "styled-components"
import axios from "axios"
import {useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import useInput from "../../util/useInput"

const Box = styled.div`

padding : 2%;

`
const Input = styled.input`
width : 80%;

height:15px;
background:transparent;
border-radius : 4px;

padding : 2% 0%;
&:focus {
    outline: none; /* 포커스 시 기본 포커스 스타일(파란 테두리) 제거 */
    border-color: transparent; /* 포커스 시 테두리 제거 */
  }
`

const Button = styled.button`
width: 18%;
height:30px;
padding : 1% 0%;

border: 0px;
background-color: transparent;

`




export default function CommentAdd(){

    const commentInput = useInput(''); // 초기값을 빈 문자열로 설정

    const stateCookie = useSelector
    ((state)  => state.CookieReducer.cookie)

    let {id} = useParams();


    const config = {
        headers: {
        Authorization: stateCookie,
        },
    };
    const add = () => {
        axios
        .post(`https://iotvase.azurewebsites.net/green/community/read/${id}`, commentInput, config)
        .then((response) => {
        
        console.log(response);
        
        })
        .catch((error) => {
        console.log('Error:', error);
        });

    };
    return(
        <>
            <Box>
                <form>
                <Input 
                    type="text"
                    placeholder='댓글을 입력하세요' 
                    {...commentInput} // useInput 함수에서 반환한 value와 onChange를 적용

                    />
                <Button onClick={add}>
                    게시
                </Button>
                </form>
            </Box>
        </>
    )
}