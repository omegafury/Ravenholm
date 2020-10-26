import { RAVEN3_PATH } from "util/constants";
import { useRef, useEffect } from "react";

/**
 * Credit to https://observablehq.com/@mbostock/voronoi-stippling
 * for much of the code behind this. It just needed to be adopted
 * to this code environment, as well as some enhancements to
 * ensure that space used by the resulting image was maximized
 * while preserving the aspect ratio of the original image.
 */
export default function VoronoiStippling() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const worker = new Worker("../voronoiStipplingWorker.js");
    let image = new Image();
    image.src = RAVEN3_PATH;
    image.onload = () => {
      if (!canvasRef.current) {
        return;
      }
      let canvas = canvasRef.current;
      // Set the canvas width and height to the size of the containing element.
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imageWidth = image.width;
      const imageHeight = image.height;
      const widthScaleFactor = canvasWidth / imageWidth;
      const heightScaleFactor = canvasHeight / imageHeight;

      /** Calculate width/height/positioning of the image when drawn on the canvas */
      let height: number, width: number;
      // This sets the width and height of the final image, preserving aspect ratio,
      // and maximizing height or width, whichever is greater.
      if (widthScaleFactor < heightScaleFactor) {
        width = imageWidth * widthScaleFactor;
        height = imageHeight * widthScaleFactor;
      } else {
        width = imageWidth * heightScaleFactor;
        height = imageHeight * heightScaleFactor;
      }
      height = Math.round(height);
      width = Math.round(width);
      // Calculate potential x and y offsets to ensure that the final image is centered.
      const dx = 0.5 * (canvasWidth - width);
      const dy = 0.5 * (canvasHeight - height);

      // Draw the source image to the canvas to extract image data.
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        width,
        height
      );
      const { data: rgba } = context.getImageData(0, 0, width, height);
      const data = new Float64Array(width * height);
      for (let i = 0, n = rgba.length / 4; i < n; ++i) {
        data[i] = Math.max(0, 1 - rgba[i * 4] / 254);
      }
      // Clear the canvas now that we've extracted the image data.
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvasWidth, canvasHeight);

      /** Generate the number of points to be used. */
      const n = Math.round((width * height) / 40);

      /** Function to draw the voronoi stippling after receiving the points from the worker */
      function messaged({ data: points }: { data: Float64Array }) {
        if (!context) {
          return;
        }
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath();
        for (let i = 0, n = points.length; i < n; i += 2) {
          const x = points[i] + dx,
            y = points[i + 1] + dy;
          context.moveTo(x + 1, y);
          context.arc(x, y, 1, 0, 2 * Math.PI);
        }
        context.fillStyle = "#000";
        context.fill();
      }

      worker.addEventListener("message", messaged);
      worker.postMessage({ data, width, height, n });
    };

    /** Clean up the worker on unmount */
    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </>
  );
}
