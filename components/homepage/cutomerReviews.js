import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselContent from "./carouselContent";
import Image from "next/image";

function CutomerReviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const customerReviews = [
    {
      description:
        "After checking all the alternatives, Leadzilla was the only solution to provide so much more than that. On top of that, it was also the only solution that didn’t involve so much pain during integration, so quick and easy, my team loves it.",
      img: "/assets/customers/connor-hevingham-alphaletz.jpeg",
      name: "Connor Hevingham",
      designation: "Head of Marketing @ Alphaletz",
    },
    {
      description:
        "We checked out a number of data products and we just loved the simplicity of Leadzilla. The data is second to none and the AI module works like magic.",
      img: "/assets/customers/patricia-christensen-goperspecta.jpeg",
      name: "Patricia Christensen ",
      designation: "Sales Manager @ Goperspecta",
    },
  ];
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <div className="flex justify-end">
          <button
            className="mx-2 h-12 w-12 bg-yellow-500 flex justify-center items-center"
            onClick={() => previous()}
          >
            <Image
              src="/assets/arrowBlackLeft.png"
              alt="next"
              height="16px"
              width="20px"
              className="py-1 px-2"
            />
          </button>
          <button
            className="mx-2 h-12 w-12 bg-yellow-500 flex justify-center items-center"
            onClick={() => next()}
          >
            <Image
              src="/assets/arrowBlackRight.png"
              alt="previous"
              height="16px"
              width="20px"
              className="py-1 px-2"
            />
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
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = [1, 2];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={`${active ? "active" : "inactive"} h-2 w-8 bg-gray-600 mx-1`}
        onClick={() => onClick()}
      ></button>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 pt-20 sm:text-left md:text-left">
        <p className="text-5xl font-gilroybold sm:text-3xl md:text-4xl sm:text-center">See what our customers</p>
        <p className="font-light text-5xl font-gilroylight pb-2 sm:text-3xl md:text-4xl sm:mb-4">
          have to say for us
        </p>
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
            {customerReviews.map((val, index) => {
              return <CarouselContent val={val} key={index} />;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default CutomerReviews;
