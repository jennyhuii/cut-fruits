import React, { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const CuttingFruits = require("../assets/videos/cut-fruits-final.mp4");

const Fruits = () => {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <div className="fruit-container">
      <video
        src={CuttingFruits}
        controls
        onPlay={() => console.log("started")}
      />
      <div className="content">
        <span className="subtitle">
          <ReactTyped
            strings={[
              "Why aren't you calling me? I'm worried about you.",
              "hello it's me",
            ]}
            typeSpeed={TYPE_SPEED}
          />
        </span>
      </div>
    </div>
  );
};

export default Fruits;
