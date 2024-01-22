'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Phone from '@/models/Phone';
import { OrbitControls } from '@react-three/drei';
import { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    const nt = gsap.timeline({ defaults: { duration: 1 } });

    nt.fromTo('nav', { y: '-100%' }, { y: '0%' });
    nt.fromTo('.hero', { opacity: 0 }, { opacity: 1 });
    nt.fromTo('.phone', { opacity: 0 }, { opacity: 1 });
  }, []);
  return (
    <section className="w-full flex flex-col sm:flex-row text-white justify-between items-center min-h-[70vh] sm:mt-0 mt-16 mb-10 hero">
      <div className="flex flex-col flex-1 w-full sm:w-2/4 px-2 gap-4 text-center sm:text-left">
        <h1 className="text-6xl sm:text-[5rem] font-semibold title">
          Unleash Your
          <span className="text-orange-400"> Digital Potential </span>with us
        </h1>
        <p className="text-2xl sm:text-3xl opacity-80">
          Crafting Web Experiences Beyond Imagination!
        </p>
        <div className="flex gap-4 sm:justify-start justify-center mt-2">
          <a href="/#projects" draggable="false">
            <button className="btn-primary select-none">
              Explore Our Work
            </button>
          </a>
          <a href="/#contact" draggable="false">
            <button className="btn-secondary select-none">
              Start Your Project
            </button>
          </a>
        </div>
      </div>
      <div className="flex w-full flex-1 h-full min-h-full phone  relative">
        <div className="w-full h-full absolute z-10" />
        <Canvas
          style={{ width: '100%', height: '70vh' }}
          camera={{ fov: 90 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={4} />
          <directionalLight position={[-5, 5, -5]} intensity={4} />
          <Phone scale={2.2} rotation={[0, 90, 0]} position={[0, 0, 1.5]} />
          <OrbitControls
            autoRotate
            autoRotateSpeed={6}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
