"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const cnoiseShader = `
// Classic Perlin 2D Noise by Stefan Gustavson
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float cnoise21(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}
`;

const vertexShader = `
varying vec2 uPos;
varying vec2 vUv;
uniform vec2 uRayMouse;
uniform float uMouseEffect;
uniform float uRatio;
float uTrailWidth = 0.15;
float PI = 3.141592653589793;

void main() {
  vUv = uv;
  vec2 direction = normalize(position.xy - uRayMouse);
  float distanceToMouse = length(position.xy - uRayMouse);
  float falloff = smoothstep(0., uTrailWidth, distanceToMouse);
  float displacement = uMouseEffect * 0.1 * falloff;
  vec3 newPosition = vec3(position.xy - direction * displacement / 2., position.z);
  uPos = direction * displacement * 2.;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uRayMouse;
uniform float uMouseEffect;
uniform float uNoiseAmount;
uniform float uAmount;
uniform float uPow;
uniform float uAlpha;
varying vec2 vUv;
varying vec2 uPos;
uniform vec3 uColor[6];
float PI = 3.141592653589793;

${cnoiseShader}

void main() {
  vec3 firstColor = uColor[0];
  vec2 seed = (vUv * -uPos) * mix(vUv, uPos, 30. * uAmount);
  float ml = pow(6.0, 0.5) * -0.01;
  float n = cnoise21(seed) + 1.0 * uTime;
  vec3 color = mix(firstColor, firstColor, cnoise21(seed) / 1000.0);

  for (int i = 1; i < 5; i++) {
    float amount = (float(i) + 1.0) * 0.09;
    float n2 = smoothstep(amount * uTime + ml, amount * uTime + ml + amount * uTime, n * uTime);
    color = mix(color, uColor[i], n2);
  }

  float alpha = uAlpha * pow(sin(vUv.x * PI), uPow);
  alpha *= pow((sin(vUv.y * PI)), uPow);
  gl_FragColor = vec4(color, alpha);
}
`;

const palette = [
  "#F2E6DB",
  "#71D9E9",
  "#8c3dd0",
  "#D03F83",
  "#F43FF9",
  "#8c3dd0"
].map((c) => new THREE.Color(c));

export default function WebglBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 10, 10000);
    const positionZ = 4000;
    camera.position.z = positionZ;
    camera.fov = (2 * Math.atan(height / 2 / positionZ) * 180) / Math.PI;
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0xF2E6DB, 1);
    container.appendChild(renderer.domElement);

    // KOTA production m[3] configuration for homepage hero
    const activeSettings = {
      distortionAmount: 0.15,
      shapeAmount: 0.25,
      rotation: 3.5,
      widthMultiplier: 0.75,
      heightMultiplier: 2.2,
      position: { x: 0.16, y: 0 },
      mouseEffect: 1,
      speedMultiplier: 1,
      timeStart: -100
    };

    camera.rotation.z = activeSettings.rotation;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.32 },
        uNoiseAmount: { value: 0 },
        uRayMouse: { value: new THREE.Vector2(-0.4, -0.4) },
        uAmount: { value: activeSettings.shapeAmount },
        uPow: { value: 1.5 },
        uAlpha: { value: 1 },
        uColor: { value: palette },
        uMouseEffect: { value: activeSettings.mouseEffect },
        uVelocity: { value: 0 },
        uRatio: { value: width / height }
      },
      side: THREE.DoubleSide,
      transparent: true,
      vertexShader,
      fragmentShader
    });

    const geometry = new THREE.PlaneGeometry(1, 1, 128, 128);
    const plane = new THREE.Mesh(geometry, material);

    const updatePlane = () => {
      plane.scale.x = activeSettings.widthMultiplier * width;
      plane.scale.y = activeSettings.heightMultiplier * (1.25 * height);
      plane.scale.z = activeSettings.widthMultiplier * width;
      camera.position.x = activeSettings.position.x * width;
      camera.position.y = -activeSettings.position.y * height;
      material.uniforms.uRatio.value = plane.scale.x / plane.scale.y;
    };
    updatePlane();
    scene.add(plane);

    // Mouse movement
    const rayMouse = new THREE.Vector2(-0.4, -0.4);
    const rayXTo = gsap.quickTo(rayMouse, "x", { duration: 0.75, ease: "power1" });
    const rayYTo = gsap.quickTo(rayMouse, "y", { duration: 0.75, ease: "power1" });

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      rayXTo(nx * 0.5);
      rayYTo(ny * 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      camera.aspect = width / height;
      camera.fov = (2 * Math.atan(height / 2 / positionZ) * 180) / Math.PI;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updatePlane();
    };
    window.addEventListener("resize", handleResize);

    let time = activeSettings.timeStart;
    let uTime = 0.32;
    let reverseUTime = false;
    let animId: number;

    const render = () => {
      time += 0.01;
      if (reverseUTime) {
        uTime -= 0.0008;
        if (uTime < 0.22) reverseUTime = false;
      } else {
        uTime += 0.0008;
        if (uTime > 0.42) reverseUTime = true;
      }

      material.uniforms.uTime.value = uTime;
      material.uniforms.uRayMouse.value = rayMouse;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden z-0"
    >
      {/* Noise Texture Overlay from KOTA */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/noise-w.png)",
          backgroundRepeat: "repeat"
        }}
      />
    </div>
  );
}
