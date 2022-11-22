import React from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Sdata from './Sdata';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function App() {
  return (
    <div className="testimonial">
      <h1>What Our Customers Say</h1>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        autoPlaySpeed={5000}
        transitionDuration={4000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Sdata.map((val) => {
          return (
            <>
              <div className="slider">
                <div className="carousel-text">
                  <div className="imgslide">
                      <img src={val.cover} alt="fg"  />
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
      ;
    </div>
  );
}
