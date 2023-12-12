import React from "react";
import Sectionheading from "../../shared/Sectionheading/Sectionheading";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-10">
      <div>
        <Sectionheading heading={'My Recent Projects'}></Sectionheading>
      </div>

      <div className="flex gap-5">
        <div className="bg-base-200 px-4 py-7  rounded-lg">
          <h3 className="text-2xl font-bold py-3">Matrimoni</h3>
          <p>
            Theme of the project is anyone can register and Add their own Bio
            Data including image and all other information. After publishing,
            the Bio Data will be visible in the Website and other person's cam
            see it and if choose, there have a contact us option. If someone
            contacted, the data will be go to the Bio Data holder's Dashboard
            and he can view and if like he can approve it or if not like he can
            delete it. Admin Dashboard is different, Admin can see How many
            success marriage, How many Male and Female etc. Users also can
            filter Male or Female, Age Limit etc when selecting from the Bio
            Data page{" "}
          </p>

          {/*  */}
          <div className="flex gap-3 my-4">
            <Link to={"https://matrimoni-1245b.web.app/"}>
              <button className="px-2 py-1 rounded-lg bg-[#D6182A] text-white">
                Live Site
              </button>
            </Link>
            <Link to={"https://github.com/mdsayedhasann/matrimony-client"}>
              <button className="px-2 py-1 rounded-lg bg-black text-white">
                {" "}
                Github Client{" "}
              </button>
            </Link>

            <Link to={"https://github.com/mdsayedhasann/matrimony-server"}>
              <button className="px-2 py-1 rounded-lg bg-black text-white">
                {" "}
                Github Server{" "}
              </button>
            </Link>
          </div>
          {/*  */}
        </div>
        <div className="px-4 py-7 shadow-2xl rounded-lg">
          <h3 className="text-2xl font-bold py-3 text-center">Mealmingle</h3>
          <p>
            Theme of the project is anyone can register and Add their own Bio
            Data including image and all other information. After publishing,
            the Bio Data will be visible in the Website and other person's cam
            see it and if choose, there have a contact us option. If someone
            contacted, the data will be go to the Bio Data holder's Dashboard
            and he can view and if like he can approve it or if not like he can
            delete it. Admin Dashboard is different, Admin can see How many
            success marriage, How many Male and Female etc. Users also can
            filter Male or Female, Age Limit etc when selecting from the Bio
            Data page{" "}
          </p>

          {/*  */}
          {/*  */}
          <div className="flex gap-3 my-4">
            <Link to={"https://matrimoni-1245b.web.app/"}>
              <button className="px-2 py-1 rounded-lg bg-[#D6182A] text-white">
                {" "}
                Live Site{" "}
              </button>
            </Link>
            <Link to={"https://github.com/mdsayedhasann/mealmingle-client"}>
              <button className="px-2 py-1 rounded-lg bg-black text-white">
                {" "}
                Github Client{" "}
              </button>
            </Link>

            <Link to={"https://github.com/mdsayedhasann/mealmingle-server"}>
              <button className="px-2 py-1 rounded-lg bg-black text-white">
                {" "}
                Github Server{" "}
              </button>
            </Link>
          </div>
          {/*  */}
          {/*  */}
        </div>
        <div className="bg-base-200 px-4 py-7  rounded-lg">
          <h3 className="text-2xl font-bold py-3">Brand Shop</h3>
          <p>
            Theme of the project is anyone can register and Add their own Bio
            Data including image and all other information. After publishing,
            the Bio Data will be visible in the Website and other person's cam
            see it and if choose, there have a contact us option. If someone
            contacted, the data will be go to the Bio Data holder's Dashboard
            and he can view and if like he can approve it or if not like he can
            delete it. Admin Dashboard is different, Admin can see How many
            success marriage, How many Male and Female etc. Users also can
            filter Male or Female, Age Limit etc when selecting from the Bio
            Data page{" "}
          </p>

          {/*  */}
          <div className="flex gap-3 my-4">
            <Link to={"https://matrimoni-1245b.web.app/"}>
              <button className="px-2 py-1 rounded-lg bg-[#D6182A] text-white">
                {" "}
                Live Site{" "}
              </button>
            </Link>
            <Link to={"https://github.com/mdsayedhasann/brand-shop-client"}>
              <button className="px-2 py-1 rounded-lg bg-black text-white">
                {" "}
                Github Client{" "}
              </button>
            </Link>

            <Link to={"https://github.com/mdsayedhasann/brand-shop-server"}>
              <button className="px-2 py-1 rounded-lg bg-black text-white">
                {" "}
                Github Server{" "}
              </button>
            </Link>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
