import './index.css';
import { useEffect } from 'react';
// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

function Home() {

  // useEffect(() => {
  //   neonCursor({
  //     el: document.getElementById('app'),
  //     shaderPoints: 16,
  //     curvePoints: 80,
  //     curveLerp: 0.5,
  //     radius1: 5,
  //     radius2: 30,
  //     velocityThreshold: 10,
  //     sleepRadiusX: 100,
  //     sleepRadiusY: 100,
  //     sleepTimeCoefX: 0.0025,
  //     sleepTimeCoefY: 0.0025
  //   });

  //   return () => {
  //   };
  // }, []);

  return (
    <div id="app" className="flex justify-center items-center">
      <div id="hero" >
        <div className=' flex justify-center items-center flex-col text-black'>
          <>
            <h1 className='text-4xl font-semibold'>Dilin Jose</h1>
          </>
          <div className="wrapper">
            <ul className="dynamic-txts">
              <li>
                <span>Software Developer</span>
              </li>
              <li>
                <span>FrontEnd Developer</span>
              </li>
              <li>
                <span>React JS Developer</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
