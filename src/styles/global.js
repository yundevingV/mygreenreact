
import AppleSDGothicNeoB from '../assets/fonts/Apple/AppleSDGothicNeoB.ttf';
import AppleSDGothicNeoEB from '../assets/fonts/Apple/AppleSDGothicNeoEB.ttf';
import AppleSDGothicNeoSB from '../assets/fonts/Apple/AppleSDGothicNeoSB.ttf';

import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    
    body{
        margin : 0px;
    }

    @font-face {
        font-family: 'SB';
        src: url(${AppleSDGothicNeoSB}) format('truetype');
    }

    @font-face {
        font-family: 'B';
        src: url(${AppleSDGothicNeoB}) format('truetype');
    }
    @font-face {
        font-family: 'EB';
        src: url(${AppleSDGothicNeoEB}) format('truetype');
    }


`