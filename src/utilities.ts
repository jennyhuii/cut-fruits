export const drawHand = (
  predictions: any[],
  ctx: CanvasRenderingContext2D | null
) => {
  //check if we have prediction
  if (predictions.length > 0 && ctx !== null) {
    //loop through each prediction
    predictions.forEach((prediction: { landmarks: any }) => {
      const landmarks = prediction.landmarks;
      for (let i = 0; i < landmarks.length; i++) {
        const x = landmarks[i][0];
        const y = landmarks[i][1];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        ctx.fillStyle = "indigo";
        ctx.fill();
      }
    });
  }
};
