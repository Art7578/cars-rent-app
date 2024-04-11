import React, { useState, useEffect } from "react";
import { SliderContainer, SliderImage } from "./InfiniteSlider.styled";

const Slider = ({ images }) => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 4000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <SliderContainer>
        <SliderImage src={images[index]} />
      </SliderContainer>
    );
  };
  
  export default Slider;