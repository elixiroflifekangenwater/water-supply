import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";


// Enhanced styles with animations and navbar spacing
const sliderStyles = `
  body {
    overflow-x: hidden;
  }
  .slider-container {
    width: 100%;
    height: calc(80vh - 64px); /* Account for navbar height */
    overflow: hidden;
    position: relative;
    margin: 64px 0 0 0; /* Top margin for navbar */
    padding: 0 0 48px 0;
    background: #fafafa;
  }
  .slider-container .slick-slider,
  .slider-container .slick-list,
  .slider-container .slick-track {
    height: 100%;
  }
  .slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    transform-origin: center center;
  }
  /* Animated dots */
  .slider-container .slick-dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex !important;
    justify-content: center;
    z-index: 2;
  }
  .slider-container .slick-dots li {
    margin: 0 8px;
    transition: transform 0.3s ease;
  }
  .slider-container .slick-dots li button:before {
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    opacity: 1;
    transition: all 0.3s ease;
  }
  .slider-container .slick-dots li.slick-active {
    transform: scale(1.4);
  }
  .slider-container .slick-dots li.slick-active button:before {
    color: white;
    opacity: 1;
  }
  /* Custom arrows */
  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    z-index: 1;
    transition: all 0.3s ease;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 40px;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  .slick-prev:hover:before, .slick-next:hover:before {
    opacity: 1;
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    .slider-container {
      height: calc(50vh - 64px);
      padding-bottom: 32px;
    }
    .slick-prev, .slick-next {
      display: none !important;
    }
  }
  @media (max-width: 480px) {
    .slider-container {
      height: calc(40vh - 64px);
      padding-bottom: 24px;
    }
  }
`;

function SimpleSlider() {
    const settings = {
        dots: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000, // Increased slide duration to 5 seconds
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Smooth easing
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        pauseOnHover: true,
        customPaging: i => (
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="dot-indicator"
            />
        ),
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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <style>{sliderStyles}</style>
            <div className="slider-container  m-11 bg-neutral-50">
                <Slider {...settings} className="py-9 rounded-2xl">
                    {[
                        "https://enagic.co.in/wp-content/uploads/2018/01/newbanner_anespadx-04.png",
                        "https://enagic.co.in/wp-content/uploads/2018/02/K8.jpg",
                        "https://enagic.co.in/wp-content/uploads/2018/01/Platinum-3.jpg",
                        "https://enagic.co.in/wp-content/uploads/2018/02/Super-501-3.jpg"
                    ].map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img 
                                src={img} 
                                className="slider-image" 
                                alt={`Slide ${index + 1}`} 
                                style={{
                                    padding: "0 40px", // Added side margins
                                    boxSizing: "border-box"
                                }}
                            />
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default SimpleSlider;