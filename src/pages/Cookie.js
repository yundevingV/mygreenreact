import { useNavigate, useParams } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux';
import { saveCookie } from "../action/cookie";

export default function Cookie (){
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    console.log('d');

    let cookie = useParams();
    dispatch(saveCookie(cookie));

    const stateCookie = useSelector(
        (state ) => state.cookie
    )
    //redux에 쿠키 저장
        
    const a = ()=>
    {
        console.log('click');
        navigate('/board');
    }
    //board로 네비게이션.

    return (
        <>  
            <button onClick={a}>
                게시판
            </button>
            쿠키확인 : 
            {stateCookie}
            
            
        </>
    )
}

