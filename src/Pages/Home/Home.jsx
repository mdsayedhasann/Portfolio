import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
      </div>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
