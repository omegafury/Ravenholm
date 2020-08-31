import { useRef, useEffect } from "react";
import { Delaunay } from "d3-delaunay";

type FrameOptionsType = {
  minRadius: number;
  maxRadius: number;
  shiftRadius: number;
  loops: number;
  rounds: number;
  pointRadius: number;
};
type OptionsType = {
  points: number;
  canvasWidth: number;
  canvasHeight: number;
  largerDimension: number;
};

function getRandomFromRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const defaultFrameOptions: FrameOptionsType = {
  minRadius: 0.2,
  maxRadius: 1,
  shiftRadius: getRandomFromRange(-2.5, 2.5),
  loops: Math.round(getRandomFromRange(1, 10)),
  rounds: Math.round(getRandomFromRange(1, 10)),
  pointRadius: 1.5, // set to 0 to hide points
};

/**
 * Generator function for frame options. Randomly picks between
 * 0 and 3 of the options to modulate on each successive generator
 * call so that the animation slowly changes over time.
 */
function* frameOptionsGenerator(): Generator<FrameOptionsType> {
  const pulseShiftRadius = Math.random() > 0.5 ? true : false;
  const modulateLoops = Math.random() > 0.4 ? true : false;
  const modulateRounds = Math.random() > 0.4 ? true : false;
  let shiftRadiusAsc = true;
  let loopsAsc = true;
  while (true) {
    // Random walk the loops option up and down slowly
    if (modulateLoops) {
      if (defaultFrameOptions.loops % 1 === 0) {
        loopsAsc = Math.random() > 0.5 ? true : false;
      }
      if (loopsAsc) {
        defaultFrameOptions.loops += 0.002;
      } else {
        defaultFrameOptions.loops -= 0.002;
      }
      defaultFrameOptions.loops = +defaultFrameOptions.loops.toFixed(3);
    }

    // Random walk the rounds option up and down slowly
    if (modulateRounds) {
      if (defaultFrameOptions.rounds % 1 === 0) {
        loopsAsc = Math.random() > 0.5 ? true : false;
      }
      if (loopsAsc) {
        defaultFrameOptions.rounds += 0.002;
      } else {
        defaultFrameOptions.rounds -= 0.002;
      }
      defaultFrameOptions.rounds = +defaultFrameOptions.rounds.toFixed(3);
    }

    // Pulse the animation by slowly changing shiftRadius
    if (pulseShiftRadius) {
      if (defaultFrameOptions.shiftRadius >= 10) {
        shiftRadiusAsc = false;
      } else if (defaultFrameOptions.shiftRadius <= -10) {
        shiftRadiusAsc = true;
      }
      if (shiftRadiusAsc) {
        defaultFrameOptions.shiftRadius += 0.025;
      } else {
        defaultFrameOptions.shiftRadius -= 0.025;
      }
    }

    yield defaultFrameOptions;
  }
}

function shiftExp(p: number) {
  if (!p) {
    return (v: number) => v;
  } else if (p < 0) {
    return (v: number) => v ** Math.abs(p - 1);
  }
  return (v: number) => 1 - (1 - v) ** (p + 1);
}

function render(context: CanvasRenderingContext2D, options: OptionsType) {
  const { points, canvasWidth, canvasHeight, largerDimension } = options;
  const { PI, cos, sin } = Math,
    TAU = PI * 2;

  // Slight displacement to prevent points from covering the same spot.
  const wiggle = 1e-5;
  const sites = new Float64Array(points * 2);
  const voronoi = new Delaunay(sites).voronoi([
    0,
    0,
    canvasWidth,
    canvasHeight,
  ]);

  return function drawFrame(
    timeScaler: number,
    frameOptions: FrameOptionsType
  ) {
    const {
      lineWidth = 1,
      pointRadius = 1.5,
      pointColor = "#b0c4de",
      lineColor = "#b0c4de",
      bgColor = "#fff",
      minRadius = 0,
      maxRadius = 1,
      shiftRadius = 0,
      rounds = 2,
      loops = 9,
    } = { ...options, ...frameOptions };

    const rShift = shiftExp(shiftRadius);

    // Update the voronoi points with their new position
    for (let n = 0; n < points; n++) {
      const tn = (n + timeScaler) / points;
      const a = tn * TAU * rounds - PI / 2 - tn * wiggle;
      const r =
        ((minRadius +
          (maxRadius - minRadius) * rShift(cos(tn * TAU * loops) / 2 + 0.5)) /
          2) *
        largerDimension;
      sites[n * 2] = canvasWidth / 2 + cos(a) * r;
      sites[n * 2 + 1] = canvasHeight / 2 + sin(a) * r;
    }

    // Clear canvas before rendering new frame
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    // Render lines
    context.beginPath();
    voronoi.update().render(context);
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.stroke();

    // Render points
    if (pointColor && pointRadius) {
      context.beginPath();
      voronoi.delaunay.renderPoints(context, pointRadius);
      context.fillStyle = pointColor;
      context.fill();
    }
  };
}

/**
 * Credit to https://observablehq.com/@mootari/valking-woronoi
 * for much of the code behind this. I just made the necessary
 * modifications for it to run in this environment, as well as
 * some enhancements to allow dynamic modulation of the frame
 * options so that the animation would slowly change over time
 */
export default function VoronoiMutator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    let canvas = canvasRef.current;
    // Set the canvas width and height to the size of the containing element.
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const options = {
      points: Math.round(getRandomFromRange(32, 196)),
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      largerDimension:
        canvas.width < canvas.height ? canvas.width : canvas.height,
    };

    const drawFrame = render(context, options);
    const frameOptionsGen = frameOptionsGenerator();

    const drawFrameInterval = setInterval(() => {
      const timeScaler = (Date.now() / 4000) % 1;
      drawFrame(timeScaler, frameOptionsGen.next().value);
    }, 1000 / 30);

    return () => {
      clearInterval(drawFrameInterval);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.5,
          gridArea: "mainBody",
        }}
      />
    </>
  );
}
