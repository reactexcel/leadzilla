import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselContent from "./carouselContent";
import Image from 'next/image'

function CutomerReviews() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <div className="flex justify-end">
          <button
            className='mx-2 h-12 w-12 bg-yellow-300 flex justify-center items-center'
            onClick={() => previous()}
          >
            <Image src="/assets/arrowBlackLeft.png" alt="next" height="16px" width="20px" className="py-1 px-2" />
          </button>
          <button
            className='mx-2 h-12 w-12 bg-yellow-300 flex justify-center items-center'
            onClick={() => next()}
          >
            <Image src="/assets/arrowBlackRight.png" alt="previous" height="16px" width="20px" className="py-1 px-2" />
          </button>
        </div>
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = [1, 2];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={`${active ? "active" : "inactive"} h-2 w-8 bg-gray-600 mx-1`}
        onClick={() => onClick()}
      >

      </button>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-8">
        <p className="font-extrabold text-black text-5xl font-gilroybold">See what our customers</p>
        <p className="font-light text-black text-5xl font-gilroylight">have to say for us</p>
        <div className="w-10/12">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            transitionDuration={500}
            renderButtonGroupOutside
            arrows={false}
            customButtonGroup={<ButtonGroup />}
            customDot={<CustomDot />}
          >
            <CarouselContent />
            <CarouselContent />
          </Carousel>;
        </div>
      </div>
    </>
  )
}

export default CutomerReviews;