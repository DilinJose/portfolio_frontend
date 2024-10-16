import { useEffect, useRef } from 'react';

const RippleEffect = () => {
  const rippleSettings = {
    maxSize: 200,
    animationSpeed: 5,
    strokeColor: [148, 217, 255],
  };

  const canvasSettings = {
    blur: 4,
    ratio: 1,
  };

  function Coords(x, y) {
    this.x = x || null;
    this.y = y || null;
  }

  const Ripple = function Ripple(x, y, circleSize, ctx) {
    this.position = new Coords(x, y);
    this.circleSize = circleSize;
    this.maxSize = rippleSettings.maxSize;
    this.opacity = 1;
    this.ctx = ctx;
    this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
      ${Math.floor(rippleSettings.strokeColor[1])},
      ${Math.floor(rippleSettings.strokeColor[2])},
      ${this.opacity})`;

    this.animationSpeed = rippleSettings.animationSpeed;
    this.opacityStep = (this.animationSpeed / (this.maxSize - circleSize)) / 2;
  };

  Ripple.prototype = {
    update: function update() {
      this.circleSize += this.animationSpeed;
      this.opacity -= this.opacityStep;
      this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
        ${Math.floor(rippleSettings.strokeColor[1])},
        ${Math.floor(rippleSettings.strokeColor[2])},
        ${this.opacity})`;
    },
    draw: function draw() {
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.strokeColor;
      this.ctx.arc(this.position.x, this.position.y, this.circleSize, 0, 2 * Math.PI);
      this.ctx.stroke();
    },
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const ripples = [];



    const setCanvasSize = () => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

      canvas.width = canvasWidth * canvasSettings.ratio;
      canvas.height = canvasHeight * canvasSettings.ratio;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
    };

    setCanvasSize();
    canvas.style.filter = `blur(${canvasSettings.blur}px)`;

    const canvasMouseOver = (e) => {
      const x = e.clientX * canvasSettings.ratio;
      const y = e.clientY * canvasSettings.ratio;
      ripples.unshift(new Ripple(x, y, 2, ctx));
    };

    const animation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        const r = ripples[i];

        r.update();
        r.draw();

        if (r.opacity <= 0) {
          ripples.splice(i, 1); // Remove faded ripple
        }
      }
      requestAnimationFrame(animation);
    };

    animation();
    canvas.addEventListener('mousemove', canvasMouseOver);

    window.addEventListener('resize', setCanvasSize); // Handle window resize

    // Cleanup function to remove event listener and stop animation
    return () => {
      canvas.removeEventListener('mousemove', canvasMouseOver);
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RippleEffect;
