import styled from "styled-components";
import { theme } from '../../styles/theme';
import { darken } from 'polished';
import breakpoints from "../../styles/breakPoints";

// Estilização do botão baseado na prop $variant
export const Container = styled.button`
    // Definição da largura do botão com base na variação passada via prop $variant
    width: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '12.0625rem'; // Largura do botão no header
            case 'main':
                return '17.6875rem'; // Largura do botão na main
            case 'blog':
                return '10.8125rem'; // Largura do botão no blog
            case 'mais':
                return '11rem';      // Largura do botão 'mais'
            default:
                return '12.0625rem'; // Valor padrão para o botão
        }
    }};

@media ${breakpoints.xl} {
        width: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '10rem'; // Largura do botão no header para telas pequenas
            case 'main':
                return '15rem'; // Largura do botão na main para telas pequenas
            case 'blog':
                return '10.8125rem'; // Largura do botão no blog para telas pequenas
            case 'mais':
                return '11rem'; // Largura do botão 'mais' para telas pequenas
            default:
                return '12.0625rem'; // Valor padrão para telas pequenas
        }
    }};
    }

    @media ${breakpoints.xs} {
        width: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '10rem'; // Largura do botão no header para telas pequenas
            case 'main':
                return '13rem'; // Largura do botão na main para telas pequenas
            case 'blog':
                return '10.8125rem'; // Largura do botão no blog para telas pequenas
            case 'mais':
                return '11rem'; // Largura do botão 'mais' para telas pequenas
            default:
                return '12.0625rem'; // Valor padrão para telas pequenas
        }
    }};
    }

   @media ${breakpoints.md} {
    display: ${props => {
        switch (props.$variant) {
            case 'header':
                return 'none'

            default:
                break;
        }
    }}
   } 


    // Definição da altura do botão com base na variação passada via prop $variant
    height: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '3.1875rem'; // Altura do botão no header
            case 'main':
                return '4rem';      // Altura do botão na main
            case 'blog':
                return '3.5rem';    // Altura do botão no blog
            case 'mais':
                return '4rem';      // Altura do botão 'mais'
            default:
                return '3.1875rem'; // Valor padrão para o botão
        }
    }};

@media ${breakpoints.xs} {
    height: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '3.1875rem'; // Altura do botão no header
            case 'main':
                return '3rem';      // Altura do botão na main
            case 'blog':
                return '3.5rem';    // Altura do botão no blog
            case 'mais':
                return '4rem';      // Altura do botão 'mais'
            default:
                return '3.1875rem'; // Valor padrão para o botão
        }
    }};
}
    
    // Estilização comum para todos os botões
    border-radius: 3.125rem; // Bordas arredondadas
    background-color: ${props => props.$variant == 'blog' ? '#ffffff' : `${theme.colors.olivasYellow}`}; // Cor de fundo diferente para o botão do blog
    cursor: ${props => props.$variant == 'blog' || props.$variant == 'mais' ? 'normal' : 'pointer'}; // Definição do cursor dependendo da variação
    border: ${props => props.$variant == 'blog' ? `2px solid ${theme.colors.olivasYellow}` : 'none'}; // Botão do blog tem borda, os outros não
    color: #ffffff; 
    font-weight: 700; 
    font-size: 1.25rem; 
    line-height: 1.5rem; 
    transition: linear 0.2s; // Transição suave para efeitos de hover

    // Estilização para quando o botão está em estado de hover
    &:hover {
        background-color: ${props => props.$variant === 'blog' ? darken(0.07, theme.colors.olivasYellow) : darken(0.07, theme.colors.olivasYellow)};
        // Escurece a cor do fundo em 7% quando o botão é 'hovered'
    }

    // Estilização do elemento 'a' dentro do botão
    a {
        display: block; 
        width: 100%; 
        height: 100%; 
        text-align: center; // Alinha o texto no centro
        color: ${props => props.$variant == 'blog' ? `${theme.colors.olivasYellow}` : '#ffffff'}; // Cor do texto depende da variação
        text-decoration: none; // Remove sublinhado dos links
        line-height: 3.1875rem; 
        cursor: default; // Cursor padrão

        // Estilização do link quando está em estado de hover
        &:hover {
            color: #ffffff; // Altera a cor do texto ao passar o mouse
        }
    }
`;
