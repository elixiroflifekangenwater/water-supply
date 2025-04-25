import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

// Add styles for full screen hero slider
const sliderStyles = `
  body {
    overflow-x: hidden;
  }
  .slider-container {
    width: 100%;
    height: 80vh;
    overflow: hidden;
    position: relative;
    max-width: 100vw;
    margin: 0;
    padding: 0 0 48px 0; /* Add bottom padding for dots */
    background: #fafafa;
  }
  .slider-container .slick-slider,
  .slider-container .slick-list,
  .slider-container .slick-track {
    height: 100%;
  }
  .slider-image {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 80vh;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
  /* Make sure dots are visible and styled */
  .slider-container .slick-dots {
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    display: flex !important;
    justify-content: center;
    z-index: 2;
  }
  .slider-container .slick-dots li button:before {
    font-size: 12px;
    color: #888;
    opacity: 1;
  }
  .slider-container .slick-dots li.slick-active button:before {
    color: #333;
    opacity: 1;
  }
  @media (max-width: 768px) {
    .slider-container {
      height: 45vh;
      padding-bottom: 32px;
    }
    .slider-image {
      height: 45vh;
      max-height: 45vh;
    }
  }
  @media (max-width: 480px) {
    .slider-container {
      height: 30vh;
      padding-bottom: 24px;
    }
    .slider-image {
      height: 45vh;
      max-height: 45vh;
    }
  }
`;

function SimpleSlider() {
    var settings = {
        dots: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: "ease-in-out",
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <style>{sliderStyles}</style>
            <div className="slider-container pb-5 bg-neutral-50">
                <Slider {...settings}>

                    <div>
                        <img src="https://enagic.co.in/wp-content/uploads/2018/01/newbanner_anespadx-04.png" className="slider-image" alt="Anespa DX" />
                    </div>
                    <div>
                        <img src="https://enagic.co.in/wp-content/uploads/2018/02/K8.jpg" className="slider-image" alt="K8" />
                    </div>
                    <div>
                        <img src="https://enagic.co.in/wp-content/uploads/2018/01/Platinum-3.jpg" className="slider-image" alt="Platinum" />
                    </div>
                    <div>
                        <img src="https://enagic.co.in/wp-content/uploads/2018/02/Super-501-3.jpg" className="slider-image" alt="Super 501" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default SimpleSlider;
