import React, { useEffect, useRef } from 'react';
import './ImageSlider.css';
import image1 from '../Images/vote1.webp';
import image2 from '../Images/vote2.webp';
import image3 from '../Images/vote3.png';

const ImageSlider = () => {
    const sliderRef = useRef(null);
    const cloneCount = 3; // Number of times to clone the slides

    useEffect(() => {
        const slider = sliderRef.current;
        let interval = setInterval(() => {
            slider.scrollBy({
                top: 0,
                left: slider.clientWidth,
                behavior: 'smooth'
            });

            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                setTimeout(() => {
                    slider.scrollTo({ left: 0, behavior: 'auto' });
                }, 500); 
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container" ref={sliderRef}>
            <div className="slider">
                {[...Array(cloneCount)].flatMap(() => (
                    <>
                        <div className="slide"><img src={image1} alt="Image 1" /></div>
                        <div className="slide"><img src={image2} alt="Image 2" /></div>
                        <div className="slide"><img src={image3} alt="Image 3" /></div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
