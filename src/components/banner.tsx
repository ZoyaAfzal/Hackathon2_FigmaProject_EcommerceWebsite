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
          className="w-10 h-10 absolute bottom-32 z-30 right-10 border-[1px] border-gray-700 px-2 hover:border-gray-800 bg-colors-bgColor hover:bg-colors-primaryColor overflow-hidden"
          onClick={onClick}
        > 
          <div className="w-full max-w-[1320px] lg:w-[1262px] h-auto text-gray-600 hover:text-white text-sm uppercase flex relative items-center justify-between cursor-pointer group pt-3">
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
          className="w-10 h-10 absolute bottom-32 z-30 left-10 border-[1px] border-gray-700 px-2 hover:border-gray-800 bg-colors-bgColor  hover:bg-colors-primaryColor overflow-hidden"
          onClick={onClick}
        >
          <div className="w-full h-full text-gray-600 hover:text-white text-sm uppercase relative flex items-center justify-end cursor-pointer group">
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

    <div className='lg:w-[1262px]'>
         <Slider {...settings}>
        <div>
        <Image src={nikebanner} alt="nikebanners" width={1060} height={700} loading="eager"
        className='slider-image object-cover lg:w-[1262px] lg:h-[900px] md:w-[968px] sm:w-[720px] '
        />
        </div>
        <div>
        <Image src={Nikeban} alt="nikebanners"  width={1060} height={700} loading="lazy"
        className='slider-image  object-cover lg:w-[1262px] lg:h-[900px] md:w-[968px] sm:w-[720px] '
        />
        </div>
        <div>
        <Image src={bannernike2} alt="nikebanners" width={1060} height={500} loading="lazy" 
        className='slider-image  object-cover lg:w-[1262px] md:w-[968px] sm:w-[720px] ]'
        />
        </div>
        <div>
        <Image src={bannernike3} alt="nikebanners"  width={1200} height={500} loading="lazy"
        className='slider-image  object-cover lg:w-[1262px] md:w-[968px] sm:w-[720px] '
        />
        </div>
        </Slider>
    </div>
  )
}

export default Banner;

