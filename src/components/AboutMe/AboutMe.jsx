import React from "react";
import { TypeAnimation } from "react-type-animation";
import Sectionheading from "../../shared/Sectionheading/Sectionheading";
import { FaBeer, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <Sectionheading heading={"About Me"}></Sectionheading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div>

            <div className="flex justify-center">
            <img className="py-4"
            src="https://i.ibb.co/WyQ5m68/image-removebg-preview.png"
            alt=""
          />
            </div>
          
        </div>
        <div>
          <h2 className="text-5xl font-bold">
            I am <span className="text-[#DC143C]">Sayed</span>{" "}
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Passionate MERN Stack craftsman.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Proficient in React, Node.js, MongoDb.",
              3000,
              "Designing seamless user experiences.",
              3000,
              "Constantly exploring new technologies.",
              3000,
              "Driven by a fervor for coding impact.",
              3000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "24px",
              display: "inline-block",
              color: "#D6182A",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
          <p>
            Dynamic MERN Stack specialist with a proven track record in React,
            Node.js, and WordPress. Dedicated to crafting user-centric
            experiences, I thrive on coding challenges, constantly evolving to
            deliver cutting-edge solutions
          </p>
          <div className="flex my-3 gap-3">
            <Link to={"https://www.linkedin.com/in/sayedhasan1/"}>
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
                <FaLinkedin></FaLinkedin>
              </button>
            </Link>
            <Link to={"https://twitter.com/MdSayed16411578"}>
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
                <FaTwitter></FaTwitter>
              </button>
            </Link>
            <Link to={"https://github.com/mdsayedhasann"}>
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
                <FaGithub></FaGithub>
              </button>
            </Link>
            <Link to={"https://www.instagram.com/sayedhasan0011/"}>
              <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200">
                <FaInstagram></FaInstagram>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
