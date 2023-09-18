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




export default function CommentAdd(props){

    const commentInput = useInput(''); // 초기값을 빈 문자열로 설정

    const userid = useSelector
    ((state)  => state.CookieReducer.cookie)

    let {id} = useParams();



    const saveComment = async (e) => {

        const url = `https://iotvase.azurewebsites.net/community/read/${id}`;
    
        const headers = {
            // Authorization: token,
            // 'Content-Type': 'application/json',
        };
    
        const data = {
            content : commentInput.value,
            userid : userid,
        };
    
        try {
            e.preventDefault(); // 기본 동작 막기

            const response = await axios.post(url, data, { headers });
            console.log('Response:', response.data);
            alert('댓글을 성공적으로 작성했습니다!');
            window.location.reload();


            } catch (error) {
            console.error('Error:', error);
            }
        };
        console.log(userid)
        console.log({...commentInput})
    return(
        <>
            <Box>
                <form>
                <Input 
                    type="text"
                    placeholder='댓글을 입력하세요' 
                    {...commentInput} // useInput 함수에서 반환한 value와 onChange를 적용

                    />
                <Button type="button" onClick={saveComment}>
                    게시
                </Button>

                </form>
            </Box>
        </>
    )
}