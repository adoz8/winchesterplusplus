import React, {useState} from 'react';
import { SliderData2 } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageD = ['./images/sl.jpg', './images/buddhism.jpg', './images/logos.jpg', './images/dilini.jpg','./images/sripada.jpg','./images/butterfly.jpg','./images/cake1.jpg']
const ImageText = ["I'm from Sri Lanka","I am passionate about Buddhism","Charitable work and volunteering is a big part of me", "Dilini's family is my second family","I enjoy hiking","I am passionate about sustainability", "I love baking"]
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
      
    {ImageD.map((slide, Index) => {
        return (
          <div className={Index === current ? 'slide active' : 'slide' } key={Index}>
          {Index === current && (<img src={require(`${slide}`)} alt="SL image" className='image' />)}   
          <h1 className='addingCol'>{ImageText[Index]}</h1>
          </div>
        )
        
    })}
  </section>
  );
};

export default ImageSlider;
