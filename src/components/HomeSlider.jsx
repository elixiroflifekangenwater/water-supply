import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Slide1 from "../assets/SliderImages/Slide1.png";
import Slide2 from "../assets/SliderImages/Slide2.png";
import Slide3 from "../assets/SliderImages/Slide3.png";
import Slide4 from "../assets/SliderImages/Slide4.png";
import Slide5 from "../assets/SliderImages/Slide5.png";
import Slide6 from "../assets/SliderImages/Slide6.png";
import Slide7 from "../assets/SliderImages/Slide7.png";
import Slide8 from "../assets/SliderImages/Slide8.png";
import { Slide } from "react-toastify";
const sliderStyles = `
  body {
    overflow-x: hidden;
  }
  .slider-container {
    width: 90%;
    height: auto;
    overflow: hidden;
    position: relative;
    margin: 64px auto 0;
    padding: 0 0 48px 0;
    background: #fafafa;
  }
  .slider-container .slick-slider,
  .slider-container .slick-list,
  .slider-container .slick-track {
    height: auto;
  }
  .slider-image {
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
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
    z-index: 20;
  }
  .slider-container .slick-dots li {
    margin: 0 8px;
    transition: transform 0.3s ease;
  }
  .slider-container .slick-dots li button:before {
    content: "•";
    font-size: 24px;
    color: white;
    opacity: 0.7;
    text-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
  .slider-container .slick-dots li.slick-active button:before {
    color: white;
    opacity: 1;
    transform: scale(1.2);
  }
  /* Custom arrows */
  .slick-prev, .slick-next {
    width: 50px;
    height: 50px;
    z-index: 20;
    transition: all 0.3s ease;
    background: rgba(255,255,255,0.9) !important;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 30px;
    color: black;
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  .slick-prev:hover:before, .slick-next:hover:before {
    opacity: 1;
    transform: scale(1.2);
  }
  .slick-prev:hover, .slick-next:hover {
    background: white !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
  @media (max-width: 768px) {
    .slider-container,
    .slider-container .slick-slider,
    .slider-container .slick-list,
    .slider-container .slick-track,
    .slider-image {
      height: 70vh;
    }
    .slider-container {
      width: 100%;
      height: auto;
      padding-bottom: 32px;
    }
    .slider-image {
      max-height: 50vh;
    }
    .slick-prev, .slick-next {
      display: block !important;
      width: 40px;
      height: 40px;
    }
    .slick-prev {
      left: 5px;
    }
    .slick-next {
      right: 5px;
    }
    .slider-container .slick-dots li button:before {
      font-size: 20px;
    }
  }
  @media (max-width: 480px) {
    .slider-container,
    .slider-container .slick-slider,
    .slider-container .slick-list,
    .slider-container .slick-track,
    .slider-image {
      height: 50vh;
    }
    .slider-container {
      width: 98%;
      height: auto;
      padding-bottom: 24px;
    }
    .slider-image {
      max-height: 40vh;
    }
  }
`;

function SimpleSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: false,
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
      <div className="slider-container mx-4 bg-neutral-50">
        <Slider {...settings} className="py-9 rounded-2xl">
          {[
            Slide1,
            Slide2,
            Slide3,
            Slide4,
            Slide5,
            Slide6,
            Slide7,
            Slide8

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
                  padding: "0 10px",
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