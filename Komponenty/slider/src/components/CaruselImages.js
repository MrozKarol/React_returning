import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import image1 from '../image/laptop.jpg'
import image2 from '../image/business.jpg'
import image3 from '../image/gatsbyastronaut.png'
const CaruselImages = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 50;
    return (
        <div style={{ padding: `0 ${chevronWidth}px`, width: "500px", margin: "0 auto" }}>
            <ItemsCarousel
                gutter={3}
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div > <img style={{ width: "100%" }} src={image1} alt="" /> </div>
                <div ><img style={{ width: "100%" }} src={image2} alt="" /></div>
                <div ><img style={{ width: "100%" }} src={image3} alt="" /></div><div > <img style={{ width: "100%" }} src={image1} alt="" /> </div>
                <div ><img style={{ width: "100%" }} src={image2} alt="" /></div>
                <div ><img style={{ width: "100%" }} src={image3} alt="" /></div>
            </ItemsCarousel>
        </div>
    );
}

export default CaruselImages;