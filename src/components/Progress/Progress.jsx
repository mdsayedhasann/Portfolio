import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Sectionheading from "../../shared/Sectionheading/Sectionheading";
import "./progress.css";
const Progress = () => {
  return (
    <div className="grid grid-cols-2 items-center my-8">
      <div>
        <h2 className="font-bold text-5xl">
            My Skills
        </h2>
        <p className="py-4">
        Skill Spectrum: Unveiling Proficiency Levels Across the Tech Galaxy. Mastery Meter: Gauge My Expertise in Crafting Digital Solutions. Skill Set Showcase: Bridging Creativity with Technical Proficiency. Expertise Unleashed: Elevating Projects through Technical Prowess. Tech Proficiency Barometer: Reflecting Versatility and Innovation. </p>
      </div>

      <div>
        <div className="w-[80%]">
          <div className="my-3">
            <div className="flex justify-between">
              <h3>HTML</h3>
              <h3>97%</h3>
            </div>
            <div>
              <ProgressBar
                className="wrapper"
                completedClassName="barBackground htmlWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>


          <div className="my-3">
            <div className="flex justify-between">
              <h3>CSS</h3>
              <h3>95%</h3>
            </div>
            <div>
              <ProgressBar
              completed={20}
                className="wrapper"
                completedClassName="barBackground cssWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>

          {/* JavaScript */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>JavaScript</h3>
              <h3>77%</h3>
            </div>
            <div>
              <ProgressBar
              completed={20}
                className="wrapper"
                completedClassName="barBackground jsWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
          {/* React */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>React Js</h3>
              <h3>87%</h3>
            </div>
            <div>
              <ProgressBar
              completed={20}
                className="wrapper"
                completedClassName="barBackground reactWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
          {/* Node Js */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>Node Js</h3>
              <h3>85%</h3>
            </div>
            <div>
              <ProgressBar
              completed={20}
                className="wrapper"
                completedClassName="barBackground nodeWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
          {/* Express Js */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>Express Js</h3>
              <h3>75%</h3>
            </div>
            <div>
              <ProgressBar
              completed={20}
                className="wrapper"
                completedClassName="barBackground expressWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
          {/* Mongo Db */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>MongoDb</h3>
              <h3>82%</h3>
            </div>
            <div>
              <ProgressBar
              completed={20}
                className="wrapper"
                completedClassName="barBackground mongoWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
          {/* Wordpress */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>Wordpress</h3>
              <h3>98%</h3>
            </div>
            <div>
              <ProgressBar
              completed={98}
                className="wrapper"
                completedClassName="barBackground wpWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
          {/* Woocommerce */}
          <div className="my-3">
            <div className="flex justify-between">
              <h3>Woocommerce</h3>
              <h3>94%</h3>
            </div>
            <div>
              <ProgressBar
              completed={94}
                className="wrapper"
                completedClassName="barBackground wooWidth"
                bgColor="bgColor"
                height="5px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
