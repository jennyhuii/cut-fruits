import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const GoToBed = require("../assets/vidoes/go-to-bed.mp4");

const Apple = () => {
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
          src={GoToBed}
        />
        <br />
        {startTyping && (
          <ReactTyped strings={["Go to bed early."]} typeSpeed={TYPE_SPEED} />
        )}
      </div>
    </div>
  );
};

export default Apple;
