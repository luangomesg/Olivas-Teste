import styled from "styled-components";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { theme } from "../../styles/theme";
import { darken } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem; 
  width: 54.375rem;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  width: 54.375rem;
  height: 5.5rem;
  gap: 1.25rem; 
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  flex-direction: column;
  flex: 1;
  align-items: center;


`;

export const Label = styled.label`
  margin-bottom: 0.5rem; 
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem ;
  align-self: center; 
  color: #5f5f5f;

  span {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${theme.colors.olivasYellow}
  }
`;


export const Input = styled.input`
  padding: 0.625rem; 
  font-size: 1rem; 
  width: 100%;
  border: 0.09375rem solid ${theme.colors.olivasYellow};
  border-radius: 0.25rem; 

  &:focus {
    border-color: ${theme.colors.olivasPurple}; 
    outline: none; 
  }

  @media (max-width: 780px) {
    width: 50%;
  }
`;

export const Select = styled.select`
  padding: 0.625rem; 
  font-size: 1rem; 
  width: 100%;
  border: 0.09375rem solid ${theme.colors.olivasYellow};
  border-radius: 0.25rem; 

  &:focus {
    border-color: ${theme.colors.olivasPurple}; 
    outline: none; 
  }

  @media (max-width: 780px) {
    width: 50%;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.625rem; 
  width: 100%;
  height: 9.75rem;
  font-size: 1rem; 
  border: 0.09375rem solid ${theme.colors.olivasYellow};
  border-radius: 0.25rem; 
  min-height: 6.25rem; 
  align-self: center;

  &:focus {
    border-color: ${theme.colors.olivasPurple}; 
    outline: none; 
  }

  @media (max-width: 780px) {
    width: 50%;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.625rem; 

  .labelCheckBox {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.35rem;
    margin-top: 1.5rem;

    a {
      color: #5d5d5d;
    }
  }

  @media (max-width: 780px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  padding: 1.25rem 1.875rem 1.25rem 1.875rem; 
  width: 22.5rem;
  height: 4rem;
  background-color: ${theme.colors.olivasYellow};
  border: none;
  border-radius: 3.125rem; 
  color: #ffffff;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem ;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.07, theme.colors.olivasYellow)};
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`
  .react-tel-input {
    width: 100%;
    padding: 0.625rem; 
    border-radius: 0.25rem; 
    font-size: 1rem; 
    
    

  
  }
  .flag-dropdown {
    border: 0.09375rem solid ${theme.colors.olivasYellow};
    border-right: none;
    background: transparent;
    
    
    &:focus-within {
      border: 0.09375rem solid ${theme.colors.olivasPurple};
      border-right: none;
     
    }

    @media (max-width: 780px) {
      transform: translateX(105px);
  }

  }

  .form-control {
    width: 100%;
    height: 2.7rem;
    border: 0.09375rem solid ${theme.colors.olivasYellow};
    

    &:focus {
      border: 0.09375rem solid ${theme.colors.olivasPurple};
      
    }

    @media (max-width: 780px) {
    width: 50%;
    transform: translateX(105px);
  }
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  margin: 0;
`;

export const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  font-size: 1.125rem;
  
  &::before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid ${theme.colors.olivasYellow};
    border-radius: 0.25rem;
    background: ${props => (props.checked ? theme.colors.olivasYellow : 'white')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, border-color 0.3s;
  }

  ${HiddenCheckbox}:checked + &::before {
    background-color: ${theme.colors.olivasYellow};
    border-color: ${theme.colors.olivasYellow};
  }

  ${HiddenCheckbox}:checked + &::after {
    content: '✓';
    color: white;
    font-size: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
