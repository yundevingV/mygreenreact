import { useNavigate, useParams } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux';
import { setCookie } from "../../reducer/save_cookie";

export default function DiaryCookie (){
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    let {cookie, id} = useParams();

    console.log(cookie);
    console.log(`id : ${id}`)

    dispatch(setCookie(cookie));

    const stateCookie = useSelector
        ((state)  => state.CookieReducer.cookie)

    console.log(stateCookie)
        
    const a = ()=>
    {
        console.log('click');
        navigate(`/diary/detail/${id}`);
    }

    return (
        <>  
            <button onClick={a}>
                디테일
            </button>
            쿠키확인 : 
            {stateCookie}
            
            
        </>
    )
}

