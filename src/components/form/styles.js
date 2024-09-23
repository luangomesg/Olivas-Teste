import styled from "styled-components";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { theme } from "../../styles/theme";
import { darken } from "polished";
import breakpoints from "../../styles/breakPoints";

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

  @media ${breakpoints.md} {
    width: 40rem;
  }

  @media ${breakpoints.sm} {
    width: 25rem;
  }

  @media ${breakpoints.xs} {
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5.5rem;
  flex: 1;

  @media ${breakpoints.md} {
    width: 40rem;
    align-items: center;
  }

  @media ${breakpoints.sm} {
    width: 25rem;
  }

  @media ${breakpoints.xs} {
    width: 50%;
  }


`;

export const Label = styled.label`
  margin-bottom: 0.5rem; 
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem ;
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
  height: 3.5rem;
  border: 0.09375rem solid ${theme.colors.olivasYellow};
  border-radius: 0.5rem; 

  &:focus {
    border-color: ${theme.colors.olivasPurple}; 
    outline: none; 
  }

  @media ${breakpoints.md} {
    width: 100%;
  }

 
`;

export const Select = styled.select`
  padding: 0.625rem; 
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #000000; 
  width: 100%;
  height: 3.5rem;
  border: 0.09375rem solid ${theme.colors.olivasYellow};
  border-radius: 0.5rem; 

  &:focus {
    border-color: ${theme.colors.olivasPurple}; 
    outline: none; 
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.625rem; 
  width: 100%;
  height: 9.75rem;
  font-size: 1rem; 
  border: 0.09375rem solid ${theme.colors.olivasYellow};
  border-radius: 1rem; 
  min-height: 6.25rem; 
  align-self: center;

  &:focus {
    border-color: ${theme.colors.olivasPurple}; 
    outline: none; 
  }

  @media ${breakpoints.md} {
    width: 100%;
  }

  @media ${breakpoints.xs} {
    width: 50%;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

    @media ${breakpoints.md} {
      width: 40rem;
    }

    @media ${breakpoints.sm} {
      width: 25rem;
    }

    @media ${breakpoints.xs} {
      width: 15rem;
    }
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

  @media ${breakpoints.sm} {
    width: 19rem;
    
  }

  @media ${breakpoints.xs} {
    width: 16.5rem;
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`

@media ${breakpoints.sm} {
    margin-top: 1rem;
  }
  .react-tel-input {
    width: 100%;
    padding: 0.625rem; 
    font-size: 1rem; 
    

    
    
  }
  .flag-dropdown {
    border: 0.09375rem solid ${theme.colors.olivasYellow};
    border-right: none;
    background: transparent;
    border-radius: 0.5rem 0 0 0.5rem; 
    
    &:focus-within {
      border: 0.09375rem solid ${theme.colors.olivasPurple};
      border-right: none;
     
    }

    
    

  }

  .form-control {
    width: 100%;
    height: 3.5rem;
    border: 0.09375rem solid ${theme.colors.olivasYellow};
    font-size: 1rem;
    border-radius: 0.5rem; 
    

    &:focus {
      border: 0.09375rem solid ${theme.colors.olivasPurple};
      
    }

    @media ${breakpoints.md} {

    width: 100%;
  }
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  left: 40px;
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
