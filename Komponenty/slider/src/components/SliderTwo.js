import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


import image1 from '../image/laptop.jpg'
import image2 from '../image/business.jpg'
import image3 from '../image/gatsbyastronaut.png'
const SliderTwo = () => {
    return (


        <Slider>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
        </Slider>
    );
}

export default SliderTwo;