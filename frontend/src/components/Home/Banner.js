import React from "react";
import logo from "../../imgs/logo.png";

const Banner = ({ title, setTitle, itemNotFound }) => {
  console.log("itemnotfound", itemNotFound);
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            value={itemNotFound === true ? "" : title}
            type="text"
            id="search-box"
            placeholder="What is it that you truly desire?"
            onChange={(e) => {
              return setTitle(e.target.value);
            }}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
