import RippleEffect from '../rippleEffect/rippleEffect';
import './index.css';
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
    <div>
      <RippleEffect />
      <div id="wrapper">
        <div id="hero" >
          <div className=' flex justify-center items-center flex-col text-black'>
            <div className='mb-3'>
              ‰<h1 className='text-2xl text-yellow-500 font-semibold'>Hello, I'm</h1>
            </div>

            <>
              <h1 className='text-4xl text-white font-semibold'>Dilin Jose</h1>
            </>
            <div className="wrapper">
              <div className="dynamic-txts">
                <div className='my-roles text-white'>React JS Developer</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
