import React, { useEffect, useRef } from "react";

const BouncingName = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = 2;
    let dy = 2;
    const name = "ЗАХАР";
    const fontSize = 40;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(name, x, y);

      if (x + ctx.measureText(name).width / 2 > canvas.width || x - ctx.measureText(name).width / 2 < 0) {
        dx = -dx;
      }
      if (y - fontSize / 2 < 0 || y + fontSize / 2 > canvas.height) {
        dy = -dy;
      }

      x += dx;
      y += dy;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", backgroundColor: "#000" }} />;
};

export default BouncingName;
