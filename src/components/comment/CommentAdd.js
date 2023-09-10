import styled from "styled-components"

const Box = styled.div`

padding : 2%;

`
const Input = styled.input`
width : 95%;
background: #e2e2e2;
border-radius : 4px;

padding : 2%;
`

export default function CommentAdd(){
    return(
        <>
            <Box>
                <Input 
                    placeholder='댓글을 입력하세요' />
            </Box>
        </>
    )
}