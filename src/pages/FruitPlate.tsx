import React, { useRef } from "react";
import "@tensorflow/tfjs-backend-webgl";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import Plate from "../assets/plate.png";
import "../App.css";
import { drawHand } from "../utilities";

const FruitPlate = () => {
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
      console.log(hand);
      drawHand(hand, ctx);
    }
  };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("loaded");
    setInterval(() => {
      //detect(net);
    }, 500);
  };

  runHandpose();
  console.log("rerendering");

  return (
    <>
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
    </>
  );
};

export default FruitPlate;
