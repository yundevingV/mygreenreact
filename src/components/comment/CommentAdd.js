import styled from "styled-components"
import axios from "axios"
import {useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import useInput from "../../util/useInput"

const Box = styled.div`

padding : 2%;

`
const Input = styled.input`
width : 95%;
background: #e2e2e2;
border-radius : 4px;

padding : 2%;
`

const Button = styled.button`
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
                <Input 
                    type="text"
                    placeholder='댓글을 입력하세요' 
                    {...commentInput} // useInput 함수에서 반환한 value와 onChange를 적용

                    />
                <Button onClick={add}>
                    전송
                </Button>

            </Box>
        </>
    )
}