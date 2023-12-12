import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full bg-[#FCD4D1]">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          <div className="py-20 ">
            <div className="flex justify-between items-center">
              <div className="max-w-3xl">
                <h2 className="text-6xl py-2 text-black font-semibold uppercase">
                  I am <br />
                </h2>
                <h2 className="text-6xl py-2 text-[#D6182A] font-semibold uppercase">
                  Md Sayed<span className="text-black"> Hasan</span>
                </h2>
                <h3 className="text-black">
                  Driven MERN Stack Developer adept at leveraging cutting-edge
                  technologies <br /> to build dynamic and scalable web
                  applications.
                </h3>
                <Link>
                  <button className="bg-[#D6182A] px-4 py-2 text-white my-4 rounded-lg">
                    Download CV
                  </button>
                </Link>
              </div>

              <div className="mr-32">
                <img
                  className="rounded-2xl"
                  src="https://i.ibb.co/M7H95cT/Untitled-design.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="py-20">
            <div className="flex justify-center items-center text-center">
              <div className="max-w-5xl">
                <h2 className="text-6xl py-2 text-black font-semibold mt-10">
                  I have Completed{" "}
                  <span className="text-[#D6182A]"> 50+ Projects</span> in last
                  6 months
                </h2>
                <h3 className="text-black py-3">
                  Passionate MERN stack developer dedicated to crafting seamless
                  digital experiences <br /> and pushing the boundaries of innovation.
                </h3>
                <Link to={"https://github.com/mdsayedhasann"}>
                  <button className="bg-[#D6182A] px-4 py-2 text-white my-4 rounded-lg">
                    VISIT MY GITHUB
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
