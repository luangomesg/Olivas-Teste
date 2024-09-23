import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Sans', sans-serif;
    }

    h1, h2, p, span, strong, button, label, input {
        line-height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        overflow: hidden;
        
        margin: 0 auto;
        .click2 {
        transform: translateY(-70px);
    }

    

    }
`