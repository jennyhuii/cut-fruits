import React from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const HaveYouEaten = require("../assets/vidoes/have-you-eaten.mp4");

const DragonFruit = () => {
  return (
    <div>
      <div className="fruit-container">
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          width="750"
          height="500"
          controls
          src={HaveYouEaten}
        />

        <ReactTyped strings={["Have you eaten yet?"]} typeSpeed={TYPE_SPEED} />
      </div>
    </div>
  );
};

export default DragonFruit;
