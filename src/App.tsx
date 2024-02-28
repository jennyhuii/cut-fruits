import React, { useEffect, useRef } from "react";
//useref - persist values between renders, interact w/ DOM and manage mutable vals without triggering rerender
import "@tensorflow/tfjs-backend-webgl";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import Plate from "./assets/plate.png";
import Apple from "./assets/apple.png";
import Pomelo from "./assets/pomelo.png";
import Strawberry from "./assets/strawberry.png";

import "./App.css";
import { drawHand } from "./utilities";

const App = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const detect = async (net: any) => {
    if (
      webcamRef.current !== undefined &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4 &&
      canvasRef.current !== undefined &&
      canvasRef.current !== null
    ) {
      const video = webcamRef.current.video;
      const videoHeight = video.videoHeight;
      const videoWidth = video.videoWidth;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("loaded");
    setInterval(() => {
      detect(net);
    }, 500);
  };

  runHandpose();
  console.log("rerendering");

  return (
    <div className="App">
      <div className="App-header">
        <Webcam
          ref={webcamRef}
          mirrored={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 5,
            width: "100%",
            height: "100%",
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 20,
            width: "100%",
            height: "100%",
            rotate: "y -180deg",
          }}
        />
        <img
          src={Plate}
          alt="plate"
          style={{
            zIndex: 10,
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            width: "auto",
            height: "100%",
          }}
        />
        <img
          src={Apple}
          alt="apple"
          style={{
            zIndex: 12,
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 700,
            top: 100,
            width: "auto",
            height: "25rem",
          }}
        />
        <img
          src={Pomelo}
          alt="pomelo"
          style={{
            zIndex: 12,
            position: "absolute",
            left: 500,
            top: 190,
            width: "auto",
            height: "12rem",
          }}
        />
        <img
          src={Strawberry}
          alt="strawberry"
          style={{
            zIndex: 12,
            position: "absolute",
            left: 550,
            top: 300,
            width: "auto",
            height: "22rem",
          }}
        />
      </div>
    </div>
  );
};

export default App;
