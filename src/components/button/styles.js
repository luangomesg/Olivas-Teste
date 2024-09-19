import styled from "styled-components";
import { theme } from '../../styles/theme'
import { darken } from 'polished';

export const Container = styled.button`
    width: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '12.0625rem'

            case 'main':
                return '17.6875rem'

            case 'blog':
                return '10.8125rem'

            case 'mais':
                return '11rem'

            default:
                return '12.0625rem'
        }
    }};
    height: ${(props) => {
        switch (props.$variant) {
            case 'header':
                return '3.1875rem'

            case 'main':
                return '4rem'

            case 'blog':
                return '3.5rem'

            case 'mais':
                return '4rem'

            default:
                return '3.1875rem'
        }
    }};
    border-radius: 3.125rem;
    background-color: ${props => props.$variant == 'blog' ? '#ffffff' : `${theme.colors.olivasYellow}`};
    cursor: ${props => props.$variant == 'blog' || props.$variant == 'mais' ? 'normal' : 'pointer'};
    border: ${props => props.$variant == 'blog' ? `2px solid ${theme.colors.olivasYellow}` : 'none'};
    color: #ffffff;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    transition: linear 0.2s;

    &:hover {
        background-color: ${props => props.$variant === 'blog' ? darken(0.07, theme.colors.olivasYellow) : darken(0.07, theme.colors.olivasYellow)};
        
    }

    
        a {
    display: block; 
    width: 100%;
    height: 100%;
    text-align: center; 
    color: ${props => props.$variant == 'blog' ? `${theme.colors.olivasYellow}` : '#ffffff'};
    text-decoration: none; 
    line-height: 3.1875rem; 
    cursor: default;

    &:hover {
        color: #ffffff;
    }
  }
    
`