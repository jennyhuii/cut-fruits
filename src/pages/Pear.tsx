import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const TakeCareOfFamily = require("../assets/vidoes/take-care-of-family.mp4");

const Pear = () => {
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
          src={TakeCareOfFamily}
        />
        <br />
        {startTyping && (
          <ReactTyped
            strings={[
              "What's your brother up to these days? He's working too hard in school. Make sure he's doing okay and take care of him.",
            ]}
            typeSpeed={TYPE_SPEED}
          />
        )}
      </div>
    </div>
  );
};

export default Pear;
