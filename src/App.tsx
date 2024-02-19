import React, { useRef } from 'react';
//useref - persist values between renders, interact w/ DOM and manage mutable vals without triggering rerender
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';
import * as handpose from "@tensorflow-models/handpose";
import Webcam from 'react-webcam';
import './App.css';

const App = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const detect = async (net: any) => {
    if (webcamRef.current !== undefined && webcamRef.current !== null && webcamRef.current.video?.readyState === 4
      && canvasRef.current !== undefined && canvasRef.current !== null) {
      const video = webcamRef.current.video;
      const videoHeight = video.height;
      const videoWidth = video.width;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);
      console.log(hand)
    }
  }

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("loaded");
    setInterval(() => detect(net), 500)
  }

  runHandpose();

  return (
    <div className="App">
      <header className='App-header'>
        <Webcam ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }} />
        <canvas ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }} />
      </header>

    </div>
  );
}

export default App;
