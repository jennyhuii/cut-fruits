import React from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const GetMarriedSoon = require("../assets/vidoes/get-married-soon.mp4");

const Mandarin = () => {
  return (
    <div>
      <div className="fruit-container">
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          width="750"
          height="500"
          controls
          src={GetMarriedSoon}
        />
        <ReactTyped
          strings={[
            "Last month, my best friend's daughter got married. I want you to get married too so I can be a grandmother soon.",
          ]}
          typeSpeed={TYPE_SPEED}
        />
      </div>
    </div>
  );
};

export default Mandarin;
