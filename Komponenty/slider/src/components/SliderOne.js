import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

import image1 from '../image/laptop.jpg'
import image2 from '../image/business.jpg'
import image3 from '../image/gatsbyastronaut.png'

const SliderOne = () => {
    return (
        <AwesomeSlider cssModule={AwsSliderStyles} bullets={false}>
            <div data-src={image1} ></div>
            <div data-src={image2} ></div>
            <div data-src={image3} ></div>
        </AwesomeSlider>
    );
}

export default SliderOne;