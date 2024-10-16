import { useEffect } from 'react';
import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';

const App = () => {

  const gsapRef = useRef()

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1000,
      duration: 2,
      delay: 1
    });
  }, []);

  return (
    <main>
      <div className="box">
        <h1>Hello World</h1>
      </div>
    </main>
  );
}

export default App;
