import React from "react";
import { TypeAnimation } from "react-type-animation";
import Sectionheading from "../../shared/Sectionheading/Sectionheading";
import { FaBeer, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <Sectionheading heading={"About Me"}></Sectionheading>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div>
          <img
            src="https://i.ibb.co/WyQ5m68/image-removebg-preview.png"
            alt=""
          />
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
              fontSize: "2em",
              display: "inline-block",
              color: "#D6182A",
            }}
            repeat={Infinity}
          />
          <p>
            Dynamic MERN Stack specialist with a proven track record in React,
            Node.js, and WordPress. Dedicated to crafting user-centric
            experiences, I thrive on coding challenges, constantly evolving to
            deliver cutting-edge solutions
          </p>
          <div className="flex my-3">
            <Link to={'https://github.com/mdsayedhasann'}>
              <button className="p-2 bg-slate-100 rounded-lg">
                <FaGithub></FaGithub>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
