
import AppleSDGothicNeoB from '../assets/fonts/Apple/AppleSDGothicNeoB.ttf';
import AppleSDGothicNeoEB from '../assets/fonts/Apple/AppleSDGothicNeoEB.ttf';
import AppleSDGothicNeoSB from '../assets/fonts/Apple/AppleSDGothicNeoSB.ttf';
<<<<<<< HEAD
import AppleSDGothicNeoH from '../assets/fonts/Apple/AppleSDGothicNeoH.ttf';

=======
>>>>>>> cf1baafc0ab48b7052489c73db75faa15ac37815

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
<<<<<<< HEAD
    @font-face {
        font-family: 'H';
        src: url(${AppleSDGothicNeoH}) format('truetype');
    }
    
=======

>>>>>>> cf1baafc0ab48b7052489c73db75faa15ac37815

`