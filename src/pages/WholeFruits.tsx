import React from "react";
import { useNavigate } from "react-router-dom";
import Plate from "../assets/images/plate.png";
import Apple from "../assets/images/apple.png";
import DragonFruit from "../assets/images/dragonfruit.png";
import Grapes from "../assets/images/grapes.png";
import Mandarin from "../assets/images/mandarin.png";
import Mango from "../assets/images/mango.png";
import Pear from "../assets/images/pear.png";
import "../App.css";

const WholeFruits = () => {
  const navigate = useNavigate();
  const navigateToFruit = ({ fruitPath }: { fruitPath: string }) => {
    navigate(fruitPath);
  };
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
        onClick={() => navigateToFruit({ fruitPath: "apple" })}
        style={{
          left: 555,
          top: 140,
          height: "25rem",
        }}
      />
      <img
        src={DragonFruit}
        alt="dragonfruit"
        className="fruit"
        onClick={() => navigateToFruit({ fruitPath: "dragonfruit" })}
        style={{
          left: 770,
          top: 280,
          height: "24.5rem",
          zIndex: 13,
          transform: "rotate(-13deg)",
        }}
      />
      <img
        src={Grapes}
        alt="grapes"
        className="fruit"
        onClick={() => navigateToFruit({ fruitPath: "grapes" })}
        style={{
          left: 570,
          top: 220,
          height: "38rem",
          zIndex: 14,
        }}
      />
      <img
        src={Mandarin}
        alt="mandarin"
        className="fruit"
        onClick={() => navigateToFruit({ fruitPath: "mandarin" })}
        style={{
          left: 340,
          top: 420,
          height: "30rem",
          zIndex: 13,
        }}
      />
      <img
        src={Mango}
        alt="mango"
        className="fruit"
        onClick={() => navigateToFruit({ fruitPath: "mango" })}
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
        onClick={() => navigateToFruit({ fruitPath: "pear" })}
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
