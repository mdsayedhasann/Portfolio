import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import Progress from "../../components/Progress/Progress";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

        <div className="max-w-7xl mx-auto">
            <Projects></Projects>
        </div>

        <div className="max-w-7xl mx-auto">
          <Progress></Progress>
        </div>
    </div>
  );
};

export default Home;
