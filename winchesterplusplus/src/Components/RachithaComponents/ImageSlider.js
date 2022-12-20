import React, {useState} from 'react';
import { SliderData2 } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageD = ['./images/sl.jpg', './images/dana.jpg', './images/dilini.jpg','./images/cake1.jpg']
const ImageSlider = ({ slides}) => {
const [current, setCurrent]  = useState(0);
const length = slides.length;

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1)
}

console.log(current);

if(!Array.isArray(slides) || slides.length <=0) {
  return null
}

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      
<<<<<<< HEAD
    {ImageD.map((slide, Index) => {
        return (
          <div className={Index === current ? 'slide active' : 'slide' } key={Index}>
          {Index === current && (<img src={require(`${slide}`)} alt="SL image" className='image' />)}   
=======
    {SliderData2.map((slide, Index) => {
        console.log(slide.Image);
        return (
          <div className={Index === current ? 'slide active' : 'slide' } key={Index}>
          {Index === current && (<img src={require(slide)} alt="SL image" className='image' />)}   
>>>>>>> bbdf1264e10549b799c3a7421f6dc3b8f1a51912
             
          </div>
        )
        
    })}
  </section>
  );
};

export default ImageSlider;
