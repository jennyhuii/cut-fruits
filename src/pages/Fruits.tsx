import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "../App.css";
import { TYPE_SPEED } from "../constants";

const CuttingFruits = require("../assets/videos/cut-fruits-final.mp4");

const Fruits = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [chickenSoup, setChickenSoup] = useState(false);
  const [snowing, setSnowing] = useState(false);
  const [goToBed, setGoToBed] = useState(false);
  const [getMarried, setGetMarried] = useState(false);
  const [takeCareOfFamily, setTakeCareOfFamily] = useState(false);
  const [callMe, setCallMe] = useState(false);

  const onVideoPlay = async () => {
    setStartTyping(true);
    setTimeout(() => setChickenSoup(true), 90000);
    setTimeout(() => setSnowing(true), 210000);
    setTimeout(() => setGoToBed(true), 330000);
    setTimeout(() => setGetMarried(true), 450000);
    setTimeout(() => setTakeCareOfFamily(true), 570000);
    setTimeout(() => setCallMe(true), 720000);
  };

  return (
    <div className="fruit-container">
      <video src={CuttingFruits} controls onPlay={() => onVideoPlay()} />
      <div className="content">
        {startTyping && (
          <span className="subtitle">
            <ReactTyped
              strings={["have you eaten yet?"]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setStartTyping(false), 1500)}
            />
          </span>
        )}
        {chickenSoup && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "remember the other day",
                "i told you to make this chicken soup with red dates and goji berries",
                "did you make it for dinner?",
                "i’ll send you a cooking video if you still don’t know how",
                "remember to eat more",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setChickenSoup(false), 1500)}
            />
          </span>
        )}
        {snowing && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "is it snowing outside?",
                "remember to put on more layers",
                "don’t try to be pretty. wear jackets",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setSnowing(false), 1500)}
            />
          </span>
        )}
        {goToBed && (
          <span className="subtitle">
            <ReactTyped
              strings={["go to bed early"]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setGoToBed(false), 1500)}
            />
          </span>
        )}
        {getMarried && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "last month, my best friend’s daughter got married",
                "i want you to get married too",
                "so i can be a grandma soon",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setGetMarried(false), 1500)}
            />
          </span>
        )}
        {takeCareOfFamily && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "what’s your brother been up to lately?",
                "he’s studying very hard these days",
                "you need to take care of him and text him more often",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() =>
                setTimeout(() => setTakeCareOfFamily(false), 1500)
              }
            />
          </span>
        )}
        {callMe && (
          <span className="subtitle">
            <ReactTyped
              strings={[
                "what are you doing today?",
                "you didn’t answer my calls",
                "are you busy? i miss you",
              ]}
              typeSpeed={TYPE_SPEED}
              onComplete={() => setTimeout(() => setCallMe(false), 1500)}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Fruits;
