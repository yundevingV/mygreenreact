import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export default function Main(){

    const stateCookie = useSelector
    ((state)  => state.CookieReducer.cookie)

    return(
        <>
        
        
            <Link to ='/board' >보드 </Link>
            <Link to ={`/board/detail/${stateCookie}`} >보드데테일 </Link>

            
        </>
            
    )
}