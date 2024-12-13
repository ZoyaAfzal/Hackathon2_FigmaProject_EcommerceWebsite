 'use client';
import React from "react";
import Image from 'next/image';
import nikebanner from '../../public/images/nikebanner.png';
import bannernike2 from '../../public/images/bannernike2.png';
import bannernike3 from '../../public/images/bannernike3.png';
import Nikeban from '../../public/images/Nikeban.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface ArrowProps {
  onClick?: () => void; 
}


      function SampleNextArrow(props: ArrowProps) {
      const { onClick } = props;
      return (
        <div
          className="w-10 h-10 absolute bottom-32 z-30 right-10 border-[1px] border-gray-700 px-2 hover:border-colors-bgColor bg-colors-bgColor hover:bg-colors-primaryColor  overflow-hidden"
          onClick={onClick}
        >
          <div className="w-full h-full text-gray-600 hover:text-white text-sm uppercase relative flex items-center justify-end cursor-pointer group ">
            <span className="text-lg ">
              <FaChevronRight />
            </span>
          </div>
        </div>
      );
    }
    function SamplePrevArrow(props: ArrowProps) {
      const { onClick } = props;
      return (
        <div
          className="w-10 h-10 absolute bottom-32 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 bg-colors-bgColor hover:bg-colors-primaryColor overflow-hidden"
          onClick={onClick}
        >
          <div className="w-full h-full text-gray-600 hover:text-white text-sm uppercase relative flex items-center justify-between cursor-pointer group  ">
            <span className="text-lg ">
              <FaChevronLeft />
            </span>
          </div>
        </div>
      );
    }
    
    const Banner = () => {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

return (

    <div className='w-full h-full relative'>
         <Slider {...settings}>
        <div>
        <Image src={nikebanner} alt="nikebanners" loading={"eager"}
        className='slider-image lg:w-[1644px] lg:h-[700px] w-full h-full object-cover md:w-[968px] md:h-[700px] sm:w-[720px] sm:h-[700px]'
        />
        </div>
        <div>
        <Image src={Nikeban} alt="nikebanners" loading={"lazy"}
        className='slider-image lg:w-[1644px] lg:h-[700px] w-full h-full object-cover md:w-[968px] md:h-[700px] sm:w-[720px] sm:h-[700px] '
        />
        </div>
        <div>
        <Image src={bannernike2} alt="nikebanners"  loading={"lazy"}
        className='slider-image  lg:w-[1644px] lg:h-[700px] w-full h-full object-cover md:w-[968px] md:h-[700px] sm:w-[720px] sm:h-[700px]'
        />
        </div>
        <div>
        <Image src={bannernike3} alt="nikebanners"  loading={"lazy"}
        className='slider-image  lg:w-[1644px] lg:h-[700px] w-full h-full object-cover md:w-[968px] md:h-[700px] sm:w-[720px] sm:h-[700px]'
        />
        </div>
        </Slider>
    </div>
  )
}

export default Banner;

