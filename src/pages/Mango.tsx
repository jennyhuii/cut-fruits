import React from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const WearMoreClothes = require("../assets/vidoes/wear-more-clothes.mp4");

const Mango = () => {
  return (
    <div>
      <div className="fruit-container">
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          width="750"
          height="500"
          controls
          src={WearMoreClothes}
        />
        <ReactTyped
          strings={[
            "Is it snowing outside? Put on more layers since it's so cold outside. Don't focus on aesthetics.",
          ]}
          typeSpeed={TYPE_SPEED}
        />
      </div>
    </div>
  );
};

export default Mango;
