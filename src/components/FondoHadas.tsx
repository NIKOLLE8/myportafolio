'use client'; 
import { useState, useEffect, useRef } from 'react';

type Wing = {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    angle: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    flutterPhase: number;
    flutterSpeed: number;
  };
  
  function FairyWings({ wing }: { wing: Wing }) {
    return (
    <div
      className="absolute"
      style={{
        top: `${wing.y}%`,
        left: `${wing.x}%`,
        transform: `rotate(${wing.rotation}deg)`,
        opacity: wing.opacity,
      }}
    >
      <div className="relative">
        {/* Ala izquierda */}
        <svg
          width={wing.size * 3}
          height={wing.size * 2}
          viewBox="0 0 100 80"
          style={{
            position: 'absolute',
            left: `-${wing.size * 1.5}px`,
            top: `-${wing.size}px`,
            transform: `scaleX(-1) rotate(${Math.sin(wing.flutterPhase) * 15}deg)`,
            filter: 'drop-shadow(0 0 2px rgba(147, 197, 253, 0.7))',
          }}
        >
          <path
            d="M50,40 C60,20 80,5 95,15 C110,25 90,50 75,60 C60,70 45,60 50,40 Z"
            fill="rgba(191, 219, 254, 0.7)"
            stroke="rgba(147, 197, 253, 0.9)"
            strokeWidth="1"
          />
          <path
            d="M55,42 C62,28 75,18 85,23 C95,28 85,45 70,52 C60,58 50,50 55,42 Z"
            fill="rgba(219, 234, 254, 0.8)"
            stroke="rgba(191, 219, 254, 0.9)"
            strokeWidth="0.5"
          />
          <path
            d="M60,40 C60,40 70,25 75,27 C80,29 75,37 70,40 C65,43 60,40 60,40 Z"
            fill="rgba(255, 255, 255, 0.9)"
          />
          <path
            d="M55,40 C65,25 80,15 90,20"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.5"
          />
          <path
            d="M60,45 C70,35 80,30 85,35"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Ala derecha */}
        <svg
          width={wing.size * 3}
          height={wing.size * 2}
          viewBox="0 0 100 80"
          style={{
            position: 'absolute',
            left: `-${wing.size * 1.5}px`,
            top: `-${wing.size}px`,
            transform: `rotate(${Math.sin(wing.flutterPhase) * 15}deg)`,
            filter: 'drop-shadow(0 0 2px rgba(147, 197, 253, 0.7))',
          }}
        >
          <path
            d="M50,40 C60,20 80,5 95,15 C110,25 90,50 75,60 C60,70 45,60 50,40 Z"
            fill="rgba(191, 219, 254, 0.7)"
            stroke="rgba(147, 197, 253, 0.9)"
            strokeWidth="1"
          />
          <path
            d="M55,42 C62,28 75,18 85,23 C95,28 85,45 70,52 C60,58 50,50 55,42 Z"
            fill="rgba(219, 234, 254, 0.8)"
            stroke="rgba(191, 219, 254, 0.9)"
            strokeWidth="0.5"
          />
          <path
            d="M60,40 C60,40 70,25 75,27 C80,29 75,37 70,40 C65,43 60,40 60,40 Z"
            fill="rgba(255, 255, 255, 0.9)"
          />
          <path
            d="M55,40 C65,25 80,15 90,20"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.5"
          />
          <path
            d="M60,45 C70,35 80,30 85,35"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Cuerpo de hada */}
        <div
          className="absolute rounded-full bg-blue-100"
          style={{
            width: `${wing.size / 4}px`,
            height: `${wing.size / 4}px`,
            left: `-${wing.size / 8}px`,
            top: `0px`,
            boxShadow: '0 0 4px 2px rgba(191, 219, 254, 0.6)',
          }}
        />
      </div>
    </div>
  );
}

export default function SpaceFairyBackground() {
    const [wings, setWings] = useState<Wing[]>([]);
    const wingsRef = useRef<Wing[]>([]);
    const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const newWings = [];
    for (let i = 0; i < 25; i++) {
      newWings.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 8,
        speed: Math.random() * 1.5 + 0.7,
        angle: Math.random() * 360,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.3 + 0.7,
        flutterPhase: Math.random() * Math.PI * 2,
        flutterSpeed: Math.random() * 0.1 + 0.07,
      });
    }
    setWings(newWings);
    wingsRef.current = newWings;

    const animate = () => {
      const now = Date.now();

      wingsRef.current = wingsRef.current.map(wing => {
        const angleRad = wing.angle * Math.PI / 180;
        let newX = wing.x + Math.cos(angleRad) * wing.speed * 0.1;
        let newY = wing.y + Math.sin(angleRad) * wing.speed * 0.1;

        if (newX > 100) newX = 0;
        if (newX < 0) newX = 100;
        if (newY > 100) newY = 0;
        if (newY < 0) newY = 100;

        const newAngle = wing.angle + (Math.sin(now * 0.001 + wing.id) * 2);
        const newFlutterPhase = wing.flutterPhase + wing.flutterSpeed;
        const newRotation = (wing.rotation + wing.rotationSpeed) % 360;

        return {
          ...wing,
          x: newX,
          y: newY,
          angle: newAngle,
          flutterPhase: newFlutterPhase,
          rotation: newRotation,
        };
      });

      setWings([...wingsRef.current]);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
        }
      };
      
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Nebulosas */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-1/2 h-1/2 bg-indigo-400 rounded-full opacity-10 blur-3xl" style={{ top: '20%', left: '30%' }} />
        <div className="absolute w-1/3 h-1/3 bg-purple rounded-full opacity-10 blur-3xl" style={{ top: '50%', left: '60%' }} />
        <div className="absolute w-1/4 h-1/4 bg-purple rounded-full opacity-10 blur-3xl" style={{ top: '30%', left: '70%' }} />
      </div>

      {/* Alas de hada */}
      {wings.map(wing => (
        <FairyWings key={wing.id} wing={wing} />
      ))}
    </div>
  );
}
