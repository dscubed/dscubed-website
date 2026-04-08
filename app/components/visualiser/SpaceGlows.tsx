"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Shaders ───────────────────────────────────────────────────────────────────

const vertexShader = `
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec3  uBgColor;
  uniform vec3  uColors[8];
  uniform float uAlphas[8];
  uniform float uSizes[8];

  // --- Simplex Noise (3D) ---
  vec3 mod289v3(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289v4(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x)  { return mod289v4(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314*r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g  = step(x0.yzx, x0.xyz);
    vec3 l  = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289v3(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0,i1.z,i2.z,1.0))
      + i.y + vec4(0.0,i1.y,i2.y,1.0))
      + i.x + vec4(0.0,i1.x,i2.x,1.0));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4  j  = p - 49.0*floor(p*ns.z*ns.z);
    vec4  x_ = floor(j*ns.z);
    vec4  y_ = floor(j - 7.0*x_);
    vec4  x  = x_*ns.x + ns.yyyy;
    vec4  y  = y_*ns.x + ns.yyyy;
    vec4  h  = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
    m = m*m;
    return 42.0*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  float grain(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
  }

  vec3 getPoint(float id) {
    float t      = uTime * 0.25;
    float offset = id * 2.39996;
    return normalize(vec3(
      sin(t*0.73 + offset)     * cos(t*0.51 + offset),
      cos(t*0.62 + offset*1.3) * sin(t*0.44 + offset),
      sin(t*0.85 + offset*1.1) * cos(t*0.38 + offset*0.9)
    ));
  }

  void main() {
    vec3 dir        = normalize(vPosition);
    vec3 finalColor = uBgColor;

    // One shared warp sample — cheaper than per-layer, slowed time halves cost further
    float warp = snoise(dir * 1.8 + uTime * 0.08) * 0.45;

    for (int i = 0; i < 8; i++) {
      vec3  p         = getPoint(float(i));
      float d         = distance(dir, p) + warp;
      float intensity = smoothstep(uSizes[i], 0.0, d);
      finalColor      = mix(finalColor, uColors[i], intensity * uAlphas[i]);
    }

    finalColor += (grain(gl_FragCoord.xy * 0.5 + uTime * 0.3) - 0.5) * 0.02;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// ─── Gradient config ──────────────────────────────────────────────────────────

const LAYERS = [
  { hsl: [257 / 360, 0.91, 0.27], alpha: 0.35, size: 1.1 }, // Deep Purple
  { hsl: [212 / 360, 0.85, 0.42], alpha: 0.4, size: 1.4 }, // Bright Blue
  { hsl: [224 / 360, 0.72, 0.36], alpha: 0.5, size: 1.2 }, // Mid Blue
  { hsl: [248 / 360, 0.52, 0.24], alpha: 1.0, size: 1.0 }, // Dark Purple
  { hsl: [212 / 360, 0.85, 0.42], alpha: 0.15, size: 1.3 }, // Bright Blue (faint, toned down)
  { hsl: [227 / 360, 0.45, 0.7], alpha: 0.2, size: 1.1 }, // Soft Pastel Blue (mellow)
  { hsl: [166 / 360, 0.71, 0.6], alpha: 0.32, size: 0.9 }, // Teal
  { hsl: [219 / 360, 0.83, 0.23], alpha: 0.59, size: 1.0 }, // Dark Blue
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpaceGlows() {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  // Built once — stable reference, no re-renders triggered
  const uniforms = useMemo(() => {
    const bg = new THREE.Color().setHSL(240 / 360, 0.2, 0.09);
    return {
      uTime: { value: 0 },
      uBgColor: { value: new THREE.Vector3(bg.r, bg.g, bg.b) },
      uColors: {
        value: LAYERS.map(({ hsl: [h, s, l] }) => {
          const c = new THREE.Color().setHSL(h, s, l);
          return new THREE.Vector3(c.r, c.g, c.b);
        }),
      },
      uAlphas: { value: LAYERS.map((l) => l.alpha) },
      uSizes: { value: LAYERS.map((l) => l.size) },
    };
  }, []);

  // Mutates the uniform directly — zero React overhead per frame
  useFrame(({ clock }) => {
    if (matRef.current)
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh renderOrder={-1}>
      {/* 48 segments vs 64 — invisible on a background sphere, saves ~44% vertices */}
      <sphereGeometry args={[100, 48, 48]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.BackSide}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}
