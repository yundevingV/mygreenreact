import { useNavigate, useParams } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux';
import { setCookie } from "../../reducer/save_cookie";

export default function BoardCookie (){
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    let cookie = useParams();
    console.log(cookie.cookie);

    dispatch(setCookie(cookie.cookie));

    const stateCookie = useSelector
        ((state)  => state.CookieReducer.cookie)

    console.log(stateCookie)
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

