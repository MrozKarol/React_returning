import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


import image1 from '../image/laptop.jpg'
import image2 from '../image/business.jpg'
import image3 from '../image/gatsbyastronaut.png'
const SliderTwo = () => {
    return (


        <Slider >
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
        </Slider>
    );
}

// Properties:
// slideIndex - number, default 0

// Index of the slide that will be initially displayed.

// duration - number, default 2000(ms)

// Duration of the animation in milliseconds. It is used to remove the animateIn and animateOut classNames and assign current after the transition has completed.

// disabled - boolean, default false

// Disable slider navigation

// infinite - boolean, default true

// Enable or disable infinite loop through slides. Sliders with only 2 children will have this option set to false

// autoplay - number, default undefined

// Autoplay interval in miliseconds. If undefined the slider will not play automatically. The timer will be paused and reset during user interactions such as mouse over or touch, to avoid sliding away the elements when the user wants to click them.

// touchDisabled boolean, default false

// Disable slider navigation through touch events

// minSwipeOffset - number, default 15(px)

// Minimum distance to swipe for triggering a navigation event

// previousButton - ReactElement, default is an arrow svg

// Will be rendered inside the previous button

// nextButton - ReactElement, default is an arrow svg

// Will be rendered inside the next button

// onSlideChange - function, called after the current slide has changed; receives an object with the new slide index as argument:

export default SliderTwo;