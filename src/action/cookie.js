export const SAVE_COOKIE = 'save_cookie';

export function saveCookie(cookie){
    return{
        type : SAVE_COOKIE,
        cookie
    }
}