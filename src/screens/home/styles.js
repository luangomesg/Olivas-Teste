import styled from "styled-components";
import search from '../../assets/search.svg'
import seo from '../../assets/seo.svg'
import mainImage from '../../assets/main.svg'
import { theme } from "../../styles/theme";
import { darken } from "polished";
import breakpoints from "../../styles/breakPoints";


export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 6.625rem;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    position: fixed;
    z-index: 9999;

    div {
        display: flex;
        width: 78.5rem;
        height: 5.375rem;

       .menu-click {
            
            width: 20px;
        }
    
    .imgHeader {
        width: 100%;
        max-width: 270px;
    }

    @media ${breakpoints.xll} {
    padding: 0 2rem 0 2rem;
}

    @media ${breakpoints.xl} {
        padding: 0 4rem 0 4rem;
        
        .imgHeader {
            max-width: 200px;
            margin-left: 5rem;
        }
        
    }

    @media ${breakpoints.lg} {
        padding: 0 6rem 0 6rem;

        .imgHeader {
            max-width: 150px;
            margin-left: 8rem;
        }
    }

    @media ${breakpoints.md} {

        .imgHeader {
            margin-left: 12rem;
        }
    }

    @media ${breakpoints.sm} {
        padding: 0 10rem 0 10rem;
        .imgHeader {
            margin-left: 16rem;
        }
    }

    @media ${breakpoints.xs} {
    
        .imgHeader {
            margin-left: 22rem;
        }
    }

}


`



export const Menu = styled.div`
    display: flex;
    width: 58.4375rem;
    height: 5.375rem;
    padding: 1.5 0;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;

    .click-menu {
        position: absolute;
        display: none;
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translate(-15px, 25px);


        ${({ isOpen }) =>
        isOpen &&
        `
      img {
        transform: rotate(-90deg) ;
         
      }
      
    `}

        img {
            width: 40px;
            height: 40px;
            transition: transform 0.4s ease-in-out;
        }
    }


    p {
        color: #7F7F7F;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.5rem;
        cursor: pointer;

        &:hover {
            color: ${theme.colors.olivasYellow};
        }
    }

    @media ${breakpoints.md} {
        justify-content: start;
        gap: 1.5rem;
     
    }

    @media ${breakpoints.sm} {
        
        flex-direction: column;
        z-index: 10000;
        

        p {
            opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
            transform: translate(-38px, 70px);
            background-color: ${theme.colors.olivasPurple};
            padding: 0.5rem;
            width: 10rem;
            text-align: center;
            color: #ffffff;
            border-radius: 0.5rem;
            margin-bottom: -23px;

            
        }

        ${({ isOpen }) =>
        isOpen &&
        `
      p {
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
            transition: opacity 0.5s ease;
         
      }
      
    `}

        .click-menu {
            display: block;
            transform: translate(-55px, 25px);
            
        }
    }

    @media ${breakpoints.xs} {

        p {
            transform: translate(-210px, 70px);
        }
          .click-menu {
            transform: translate(-225px, 25px);
            
          }
    }

`


export const ButtonSearch = styled.button`
    width: 1.75rem;
    height: 1.75rem;
    background-image: url(${search});
    background-position: center;
    background-color: transparent;
    border: none;
`

export const Main = styled.main`
    display: flex;
    width: 100%;
    max-width: 78.375rem;
    height: 34rem;
    padding: 4rem 0;
    align-items: center;
    gap: 0.5rem;
    margin-top: 6rem;

    @media ${breakpoints.xll} {
       
    padding: 0 2rem 0 2rem;

    }

    @media ${breakpoints.xl} {
        
        padding: 0 2rem 0 6rem;
      
    }

    @media ${breakpoints.lg} {
        padding: 0 2rem 0 7rem;
    }

    
`

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    width: 43.4375rem;
    height: 23.75rem;
    justify-content: center;
    gap: 1.5rem;


    h1 {
        font-weight: 500;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        color: #5D5D5D;
        

        span {
            font-weight: 500;
            font-size: 2.8125rem;
            line-height: 3.375rem;
            color: ${theme.colors.olivasYellow}
        }
    }

    p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: #7F7F7F;
        width: 41.9375rem;
    }

    @media ${breakpoints.xl} {

        width: 39rem;

        h1 {
            font-size: 2.5rem;
        line-height: 3.375rem;

        span {
            font-size: 2.5rem;
        }
        }
        
        p {
            width: 32rem;
        }
      
    }

    @media ${breakpoints.lg} {

        width: 33rem;

        h1 {
            font-size: 2.2rem;

            span {
                font-size: 2.2rem;
            }
        }

        p {
            width: 29rem;
            
        }
    }

    @media ${breakpoints.md} {
        width: 100%;
        height: 28rem;
        align-items: center;
        text-align:center;
        margin: 0 2rem 0 0;
        
        h1 {
            font-size: 2.5rem;

            span {
                font-size: 2.5rem;
            }
        }

        p {
            width: 35rem;
        }
    }

    @media ${breakpoints.sm} {
        height: 32rem;
        margin: 0 3rem 0 0;
        padding-right: 4rem;

        h1 {
            font-size: 2.1rem;

            span {
                font-size: 2.1rem;
            }
        }

        p {
            width: 25rem;
            font-size: 1.10rem;
            line-height: 1.5rem;
        }
    }

    @media ${breakpoints.xs} {
        padding: 0 5rem 0 0;
        height: 37rem;

        h1 {
            font-size: 35px;
            line-height: 2.5rem;

            span {
                font-size: 35px;
                line-height: 2.5rem;
            }
        }

        p {
            width: 15rem;
        }
    }

`

export const MainImage = styled.div`
    display: flex;
    width: 34rem;
    height: 33.0625rem;
    background-image: url(${mainImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media ${breakpoints.xl} {
        width: 23rem;
        height: 23rem;
    }

    @media ${breakpoints.lg} {
        width: 20rem;
        height: 20rem;
    }

    @media ${breakpoints.md} {
        display: none;
    }


`

export const ContainerSEO = styled.div`
    display: flex;
    flex-direction: column;
    width: 78.375rem;
    height: 41.5rem;
    gap: 2.5rem;
    padding: 2.3125rem 0;
    border-radius: 2rem;
    box-shadow: 0px 8px 12px -2px rgba(133, 133, 133, 0.3);
    margin-bottom: 6rem;

    .click {
        transform: translateY(-120px);
    }

    .click2 {
        transform: translateY(-70px);
    }

    

    h1 {
       
        color: #5d5d5d;
        font-weight: 500;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        text-align: center;
        margin-top: 6rem;

        span {
            color: ${theme.colors.olivasYellow};
            font-weight: 500;
            font-size: 2.8125rem;
            line-height: 3.375rem;
        }
    }

    @media ${breakpoints.xll} {
        width: 73rem;
        
   
       }

       @media ${breakpoints.xl} {
        width: 65rem;
       }

       @media ${breakpoints.lg} {
        width: 57rem;
        height: 48rem;
       }

       @media ${breakpoints.md} {
        width: 90%;
        max-width: 48rem;
        height: 42rem;
       }

       @media ${breakpoints.sm} {

        height: 44rem;

        h1 {
            font-size: 2.4rem;

            span {
                font-size: 2.4rem;
            }
        }
       }
       
       @media ${breakpoints.sm} {
        

        height: 44rem;
       }

       @media ${breakpoints.xs} {
        height: 80rem;

        h1 {
            font-size: 40px;

            span {
                font-size: 40px;
            }
        }
       }
`

export const SEO = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.875rem;

    

    
`

export const SeoText = styled.div`
    
    width: 43.5625rem;
    height: 29rem;
    p {
        color: #5d5d5d;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 2rem;
    }

    div {
        display: grid;
        grid-template-columns: 2rem auto;
        align-items: center;
        margin-top: 1rem;
        
    }

    @media ${breakpoints.lg} {
        width: 27.5rem;
    }

    @media ${breakpoints.md} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .seoText {
            width: 40rem;
        }
    }

    @media ${breakpoints.sm} {

        .seoText {
            width: 26rem;
            font-size: 1.15rem;
        }
    }

    @media ${breakpoints.xs} {

        div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
        
    }

        p {
            font-size: 1.10rem;
            margin-bottom: 1rem;
            width: 12.5rem;
        }
        .seoText {
            width: 16rem;
        }
    }

    
`

export const SeoImage = styled.div`
    width: 29.25rem;
    height: 26rem;
    background-image: url(${seo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${breakpoints.lg} {
        width: 27rem;
        height: 100%;
    }

    @media ${breakpoints.md} {
        display: none;
    }

`

export const ContainerPerformance = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 78.375rem;
    height: 44.875rem;
    padding: 1rem 0 4rem 0;
    gap: 4rem;
  

    h2 {
        font-weight: 600;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        color: ${theme.colors.olivasPurple};
    }

    @media ${breakpoints.xl} {
        width: 99%;
     
    }

    @media ${breakpoints.lg} {
        width: 90%;
        height: 100%;
        box-shadow: 0px 8px 12px -2px rgba(133, 133, 133, 0.3);
        border-radius: 2rem;
        margin-bottom: 2rem;

        >h2 {
            text-align: center;
        }
        
    }

    @media ${breakpoints.md} {

        padding-left: 2rem;
        text-align: center;
    }

    @media ${breakpoints.sm} {

        >h2 {
            font-size: 2.5rem;
            
        }
    }

    @media ${breakpoints.xs} {
        padding: 0 3rem 0 3rem;
    }

`

export const PerformanceOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    div {
        width: 36.75rem;
        height: 19.25rem;
        

        h2 {
            color: #5d5d5d;
            font-weight: 500;
            font-size: 2.375rem;
            line-height: 2.85rem;

            span {
                color: ${theme.colors.olivasYellow};
                font-weight: 500;
                font-size: 2.375rem;
                line-height: 2.85rem;
            }
        }

        p {
            color: #5d5d5d;
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.5rem;
            margin-top: 1.5rem;

            
        }

        
    }

    @media ${breakpoints.lg} {
        margin-bottom: 2rem;
        gap: 3rem;

        img {
            width: 20rem;
            height: 18rem;
            
        }

        div {
            width: 30rem;

            
            
        }
        
    }

    @media ${breakpoints.md} {
        width: 100%;

        img {
            display: none;
        }
    }

    @media ${breakpoints.sm} {
        margin-bottom: 5rem;

        div {
            h2 {
                width: 25rem;
                font-size: 40px;
                margin: 0 2rem 0 2rem;

                span {
                    font-size: 40px;
                }
                margin-bottom: 2rem;
            }

            p { 
                width: 25rem;
                margin: 0 2rem 0 2rem;
                
                font-size: 1.2rem;
            }
        }
    }

    @media ${breakpoints.xs} {

        margin-bottom: 18rem;

        div {

            h2 {
                
                width: 14rem;
            }

            p {
                font-size: 1.15rem;
                width: 16rem;
                
            }
        }
    }
`

export const PerformanceTwo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-left: 10%;
    gap: 5.5rem;
    margin-top: 1rem;
    

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 11rem;
        height: 7.3125rem;
        gap: 0.5625rem;

        img {
            width: 4rem;
            height: 4rem;
        }

        p {
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.35rem;
            color: #5d5d5d;
        }
    }

    .otm {
        width: 6.0625rem;
    }

    @media ${breakpoints.sm} {

        gap: 3rem;

        div {

            p {
                font-size: 1rem;
                line-height: 1.10rem;
            }
        }
    }

    @media ${breakpoints.xs} {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        

        div {

            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }

    
`

export const ContainerBlog = styled.div`
    width: 78.3125rem;
    height: auto;
    text-align: center;
    gap: 3.375rem;
    padding: 1rem 0 3rem 0;

    h2 {
        font-weight: 500;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        color: #5d5d5d;

        span {
        font-weight: 500;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        color: ${theme.colors.olivasPurple};
        }
    }

    @media ${breakpoints.xl} {
        width: 58rem;
    }

    @media ${breakpoints.xs} {

        >h2 {
            font-size: 2.5rem;
        }
    }

`

export const ContainerContato = styled.div`
    display: flex;
    flex-direction: column;
    width: 56rem;
    height: 56.125rem;
    padding: 6.4375rem 0;
    gap: 4rem;
    margin-bottom: 4rem;

`

export const ContatoText = styled.div`
    width: 55rem;
    height: 7.875rem;
    text-align: center;

    h1 {
        font-weight: 500;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        color: #5d5d5d;
        margin-bottom: 1.5rem;

        span {
            font-weight: 500;
        font-size: 2.8125rem;
        line-height: 3.375rem;
        color: ${theme.colors.olivasYellow};
        }

    }

    p {
            width: 54.375rem;
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.5rem;
            color: #5d5d5d;
        }
`

export const ContatoForm = styled.div`

    
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 14.1875rem;
    background-color: #E6E6E6;

`

export const FooterContent = styled.div`
    display: flex;
    width: 50rem;
    height: 9.6875rem;
    padding: 1.875rem 0 0 0;
    gap: 3.5rem;

    .company {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        width: 26.0625rem;
        height: 7.8125rem;
        color: #7f7f7f;

        img {
            width: 100%;
            max-width: 12.8125rem;
        }

        p {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.05rem;
            color: #7f7f7f;
        }
    }

    .talk {
        width: 20.38rem;
        height: 6rem;
        gap: 0.8125rem;
        margin-top: 1rem;

        h6 {
            font-weight: 700;
            font-size: 1.25rem;
            line-height: 1.5rem;
            color: #5d5d5d;
        }

        div {
        display: grid;
        grid-template-columns: auto auto;

        h5 {
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.2rem;
            color: #5d5d5d;
            margin-top: 1rem;
        }

        h4 {
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.2rem;
            color: #7f7f7f;
            margin-top: 1rem;
        }

        span {
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.2rem;
            color: #7f7f7f;
        }

        .social {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            width: 9.005rem;
            height: 3.6875rem;

            img {
                height: 2rem;
            }
        }
        }
    }
`

export const FooterCopyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.875rem;
    margin-top: 1.6rem;
    background-color: #b1b1b1;

    p {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #ffffff;

    span {
        font-weight: 400;
    }
    }
  
`

export const FloatingImage = styled.div`
    position: fixed;
    right: 280px;
    bottom: 170px;
    z-index: 10000;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

export const FloatingButton = styled.button`
    position: fixed;
    right: 350px;
    bottom: 175px;
    z-index: 5000;
    display: ${props => props.show ? 'block' : 'none'};
    background-color: ${theme.colors.olivasPurple};
    width: 15.1875rem;
    height: 4rem;
    padding: 19px;
    border-radius: 3.125rem;
    text-align: center;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: ${darken(0.07, theme.colors.olivasPurple)};
    }

    p {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: #ffffff;
        
    }

    
`;
