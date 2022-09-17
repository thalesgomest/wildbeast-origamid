import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
        a {
            text-decoration: none;
        }
        li {
            list-style: none;
        }
    }
    html, body, #root {
        font-family: var(--primary-font);
        height: 100%;
        width: 100%;
        background-color: #FFFFFF; 
    }
    :root {
            --primary-font: 'Vollkorn', serif;
            --secondary-font: 'Courier New', serif;
            --primary-color: linear-gradient(135deg, #8844EE, #B07DFB);
    }
`;

export default GlobalStyle;
