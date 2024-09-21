import styled from "styled-components";
import search from '../../assets/search.svg'
import seo from '../../assets/seo.svg'
import mainImage from '../../assets/main.svg'
import { theme } from "../../styles/theme";
import { darken } from "polished";


export const Header = styled.header`
    display: flex;
    width: 100%;
    min-width: 1200px;
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
    
    .imgHeader {
        width: 100%;
        max-width: 270px;
    }

}
`



export const Menu = styled.div`
    display: flex;
    width: 58.4375rem;
    height: 5.375rem;
    padding: 1.5rem 0;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;


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

    
`

export const SeoImage = styled.div`
    width: 29.25rem;
    height: 26rem;
    background-image: url(${seo});
    background-position: center;

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
