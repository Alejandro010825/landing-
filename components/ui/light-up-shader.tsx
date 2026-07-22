'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  float hash(float n) { return fract(sin(n) * 43758.5453123); }

  void main() {
    vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    st += (uMouse - 0.5) * 0.05; // Reacción suave al mouse

    vec3 finalColor = vec3(0.02, 0.03, 0.06); // Fondo espacial oscuro

    // Dibujar 3 capas de trazos de velocidad
    for (float layer = 1.0; layer <= 3.0; layer++) {
      float numRows = 30.0 * layer;
      vec2 grid = vec2(st.x * 2.0, st.y * numRows);
      float rowId = floor(grid.y);
      float inRowY = fract(grid.y) - 0.5;

      float speed = (hash(rowId + layer * 10.0) * 1.2 + 0.4) * (layer * 0.8);
      float lineLength = hash(rowId * 2.0) * 0.4 + 0.15;
      float offset = hash(rowId * 3.0) * 20.0;

      float xPos = fract((st.x + offset) - uTime * speed * 0.3);

      // Forma del haz de luz
      float alphaY = smoothstep(0.4, 0.0, abs(inRowY));
      float alphaX = smoothstep(0.0, 0.02, xPos) * smoothstep(lineLength, lineLength - 0.05, xPos);
      
      float intensity = alphaX * alphaY;

      // Colores de la imagen (Naranja, Amarillo, Cian, Rosa neón)
      float colorIndex = hash(rowId * 5.0);
      vec3 color = vec3(1.0, 0.4, 0.1); // Naranja
      if (colorIndex > 0.3) color = vec3(1.0, 0.85, 0.2); // Amarillo
      if (colorIndex > 0.6) color = vec3(0.1, 0.85, 1.0); // Cian
      if (colorIndex > 0.85) color = vec3(1.0, 0.2, 0.6); // Rosa

      finalColor += color * intensity * (2.2 / layer);
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mousePos = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1000, 1000) },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.getElapsedTime();
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      
      // Interpolación suave del movimiento del mouse
      uniforms.uMouse.value.lerp(
        new THREE.Vector2(
          state.pointer.x * 0.5 + 0.5,
          state.pointer.y * 0.5 + 0.5
        ),
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function LightUpShader() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute', inset: 0 }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}

export default LightUpShader;