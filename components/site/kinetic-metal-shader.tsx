"use client";

import { useEffect, useRef } from "react";

const VERT = `attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }`;
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_colorScale;
uniform float u_frequency;
uniform vec3 u_baseColor;
vec2 distort(vec2 p, float offset) {
  p += offset;
  for(float i = 1.0; i < 4.0; i++) {
    p.x += 0.3 / i * sin(i * 3.0 * p.y + u_time);
    p.y += 0.3 / i * cos(i * 3.0 * p.x + u_time);
  }
  return p;
}
void main() {
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float r = sin(distort(uv, 0.0).x * u_frequency) * 0.5 + 0.5;
  float g = sin(distort(uv, 0.02).x * u_frequency) * 0.5 + 0.5;
  float b = sin(distort(uv, 0.04).x * u_frequency) * 0.5 + 0.5;
  vec3 color = pow(vec3(r, g, b), vec3(u_colorScale));
  vec3 finalColor = mix(u_baseColor, color, 0.8);
  gl_FragColor = vec4(finalColor, 1.0);
}`;

interface KineticMetalShaderProps {
  speed?: number;
  frequency?: number;
  colorScale?: number;
  baseColor?: [number, number, number];
}

export default function KineticMetalShader({
  speed = 0.5,
  frequency = 5,
  colorScale = 8,
  baseColor = [0.0196, 0.0196, 0.0196],
}: KineticMetalShaderProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uColor = gl.getUniformLocation(prog, "u_colorScale");
    const uFreq = gl.getUniformLocation(prog, "u_frequency");
    const uBase = gl.getUniformLocation(prog, "u_baseColor");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    let raf = 0;
    const frame = () => {
      time += speed * 0.015;
      gl.uniform1f(uTime, time);
      gl.uniform1f(uColor, colorScale);
      gl.uniform1f(uFreq, frequency);
      gl.uniform3f(uBase, baseColor[0], baseColor[1], baseColor[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [speed, frequency, colorScale, baseColor]);

  return (
    <canvas
      ref={ref}
      className="block h-full w-full"
      style={{ backgroundColor: "#050505", pointerEvents: "none" }}
    />
  );
}
