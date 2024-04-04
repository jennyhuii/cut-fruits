import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const CallMe = require("../assets/vidoes/call-me.mp4");

const Grapes = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartTyping(true);
    }, 5000);
  });
  return (
    <div>
      <div className="fruit-container">
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          width="750"
          height="500"
          controls
          src={CallMe}
        />
        <br />
        {startTyping && (
          <ReactTyped
            strings={["Why aren't you calling me? I'm worried about you."]}
            typeSpeed={TYPE_SPEED}
          />
        )}
      </div>
    </div>
  );
};

export default Grapes;
