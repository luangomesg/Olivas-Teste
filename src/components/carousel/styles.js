import styled from "styled-components";
import Slider from "react-slick";
import { theme } from '../../styles/theme'

export const StyledSlider = styled(Slider)`
  display: flex;
  height: 31rem;
    .slick-slide {
    display: flex;
    justify-content: center;
    padding: 0 15px;
  }

  .slick-dots {
    bottom: -45px;

    button:before {
      font-size: 20px;
      color: #5f5f5f; 
    }

    .slick-active button:before {
      color: ${theme.colors.olivasYellow}; 
    }
  }
`

export const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  height: 100%;
  box-shadow: 0px 10px 18px -2px rgba(133, 133, 133, 0.3);
  border-radius: 1.5rem;


  img {
    max-width: 100%;
    height: 13rem;
    object-fit: cover;
  }

  h5 {
    font-weight: 500;
    font-size: 1.5625rem;
    line-height: 1.875rem;
    color: #5d5d5d;
    margin-top: 1.5rem;
    text-align: start;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #7f7f7f;
    width: 21.625rem;
    height: 3rem;
    text-align: start;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;
  }
`

