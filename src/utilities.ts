export const drawHand = (
  predictions: any[],
  ctx: CanvasRenderingContext2D | null
) => {
  //check if we have prediction
  if (predictions.length > 0 && ctx !== null) {
    //loop through each prediction
    predictions.forEach((prediction: { annotations: any }) => {
      const { indexFinger } = prediction.annotations;
      const x = indexFinger[3][0];
      const y = indexFinger[3][1];
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 3 * Math.PI);
      ctx.fillStyle = "indigo";
      ctx.fill();
    });
  }
};
