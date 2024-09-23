import { createGlobalStyle } from "styled-components";
import breakpoints from "./breakPoints";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 1rem 'Fira Sans', sans-serif;
    }

    h1, h2, p, span, strong, button, label, input {
        line-height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1920px;
        width: 98vw;
        margin: 0 auto;
        .click2 {
        transform: translateY(-70px);
    }

    @media ${breakpoints.xll} {
        width: 95vw;
    }

    }
`