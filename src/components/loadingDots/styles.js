import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; 

  span {
    width: 0.5rem; 
    height: 0.5rem; 
    border-radius: 50%; 
    background-color: ${theme.colors.olivasYellow}; 
    animation: ${blink} 1.5s infinite step-start;
    display: inline-block; 
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(3) { animation-delay: 1s; }
  }
`;
