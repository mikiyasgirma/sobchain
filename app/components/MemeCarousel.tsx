"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function MemeCarousel() {
  const createMemeList = () => {
    const memeList: Array<string> = [];
    for (let i = 1; i <= 15; i++) {
      if (i == 9 || i == 7 || i == 4) {
        memeList.push(`m${i}.jpg`);
      } else {
        memeList.push(`m${i}.png`);
      }
    }
    return memeList;
  }

  const [memes, setMemes] = useState(createMemeList());

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: 'md:w-[500px] w-[300px] md:pl-12  h-[400px] md:h-[569px]',
    centerMode: true,
    centerPadding: '0.1px'
  };

  return (
    <Slider {...settings}>
      {
        memes.map((meme, index) =>
          <div className="md:w-[786px] w-[400px] h-[400px] md:h-[569px]" key={index}>
            <Image alt="carousel"
              width={390}
              height={400}
              src={`/assets/${meme}`} />
          </div>
        )

      }
    </Slider>
  );
}
