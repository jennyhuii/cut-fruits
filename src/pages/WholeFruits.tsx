import React from "react";
import Plate from "../assets/plate.png";
import Apple from "../assets/apple.png";
import DragonFruit from "../assets/dragonfruit.png";
import Grapes from "../assets/grapes.png";
import Mandarin from "../assets/mandarin.png";
import Mango from "../assets/mango.png";
import Pear from "../assets/pear.png";
import "../App.css";

const WholeFruits = () => {
  const navigate = () => {};
  return (
    <>
      <img
        src={Plate}
        alt="plate"
        style={{
          width: "auto",
          height: "120%",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 80,
          zIndex: 10,
        }}
      />
      <img
        src={Apple}
        alt="apple"
        className="fruit"
        style={{
          left: 555,
          top: 140,
          height: "25rem",
        }}
      />
      <img
        src={DragonFruit}
        alt="dragon fruit"
        className="fruit"
        style={{
          left: 770,
          top: 280,
          height: "24.5rem",
          zIndex:13,
          transform: "rotate(-13deg)"
        }}
      />
      <img
        src={Grapes}
        alt="grapes"
        className="fruit"
        style={{
          left: 570,
          top: 220,
          height: "38rem",
          zIndex:14,
        }}
      /> 
      <img
        src={Mandarin}
        alt="mandarin"
        className="fruit"
        style={{
          left: 340,
          top: 420,
          height: "30rem",
          zIndex:13,
        }}
      />
      <img
        src={Mango}
        alt="mango"
        className="fruit"
        style={{
          left: 680,
          top: 200,
          height: "21rem",
        }}
      />
      <img
        src={Pear}
        alt="pear"
        className="fruit"
        style={{
          left: 270,
          top: 160,
          height: "35rem",
        }}
      />
    </>
  );
};

export default WholeFruits;
