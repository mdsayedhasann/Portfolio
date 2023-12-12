import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <div className="w-full bg-[#FCD4D1]">
        <div className="max-w-7xl mx-auto">
          <Header></Header>
        </div>
      </div>

      <div className="w-full">
      <Outlet></Outlet>
      </div>

      <div className="max-w-7xl mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
